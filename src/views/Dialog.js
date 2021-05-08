import React,  { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import FolderIcon from '@material-ui/icons/Folder';
import "./style.css"; 
import Bar from '../assets/Bar.png';
import Bar2 from '../assets/Bar2.png';


const classes = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

// const classes = useStyles();

export default function PicUploadNoCrop () {

  const [ open, setOpen ] = React.useState(false);
  const [ fullWidth, setFullwidth ] = React.useState(true);
  const [ maxWidth, setMaxwidth ] = React.useState("lg");


  const handleClickOpen = (e) => {
     setOpen(true)
  };

  const handleClose= (e) =>{
     setOpen(false)
  };

  const handleMaxWidthChange= (e) =>{
    setMaxwidth(e.target.value)
  };

  const handleFullWidthChange= (e) =>{
    setFullwidth(e.target.checked)
  };

    var myTimer = null;
    var moveInfo;
    var moveInc = 1;
    var speed;

    var callStack;

    var barsInfo = [{}, {}, {}, {}, {}];

    var diskPosTop, diskPosLeft, DiskID;

    var disk0 = document.getElementById("disk0");  
    var disk1 = document.getElementById("disk1");  
    var disk2 = document.getElementById("disk2");  
    var disk3 = document.getElementById("disk3");  
    var disk4 = document.getElementById("disk4");  

   window.onload = function ()
    {   
        diskPosTop = new Array();
        diskPosLeft = new Array();
        DiskID = [disk0, disk1, disk2, disk3, disk4]
        for (var i = 0; i < 5; i++)
        {  diskPosTop[i] = DiskID[i].style.top; 
           diskPosLeft[i] = DiskID[i].style.left; } 

    } 

    const executeHanoi = (e) => 
     {
        var speedSelectList = document.getElementById("speedSelectList");  
        var diskSelectList  = document.getElementById("diskSelectList"); 
        var speed = parseInt(speedSelectList.options[speedSelectList.selectedIndex].value);
        var  diskCount = parseInt(diskSelectList.options[diskSelectList.selectedIndex].value);
        // alert(diskCount);
        // var diskCount =3;

        // Move Disks to start column  
        for (var i = 0; i < 5; i++)
        {  DiskID[i].style.top = diskPosTop[i];
           DiskID[i].style.left= diskPosLeft[i];
        } 
  
        barsInfo[0].disks = ['disk0', 'disk1', 'disk2', 'disk3', 'disk4'];
        //alert(barsInfo[0].disks.pop().id);
        barsInfo[1].disks = [];
        barsInfo[2].disks = [];
        barsInfo[3].disks = [];
        barsInfo[4].disks = [];

        switch (diskCount) {
            case 3: barsInfo[0].disks.pop(); barsInfo[0].disks.pop();
                disk3.style.display = "none"; disk4.style.display = "none"; break;

            case 4: barsInfo[0].disks.pop();
                disk4.style.display = "none"; break;
        }

        callStack = [];  // callStack array is global

        Hanoi(diskCount, 0, 2, 1);

        moveDisk(); // moveDisk takes its parameters from callStack
    }


    function Hanoi(n, from, to, via) {
        if (n == 0) return;

        Hanoi(n - 1, from, via, to);
        // moveDisk(from,to);

        callStack.push([from, to]); // save parameters to callStack array
        Hanoi(n - 1, via, to, from);

    }


    function moveDisk() {
        if (callStack.length == 0) return;

        var param = callStack.shift();  // Get call parameters from callStack
        // Note: throughout the code, I use fromBar, toBar to refer to towers
        var  fromBar = param[0];
        var toBar = param[1];

        var elem = document.getElementById(barsInfo[fromBar].disks.pop());  // find top elemnet in fromBar

        moveInfo = { elem: elem,
            fromBar: fromBar,
            toBar: toBar,
            whichPos: "top", // element position property for movement
            dir: -1,  // 1 or -1
            state: "up", // move upward
            endPos: 60    // end position (in pixels) for move upward
        }

        myTimer = setInterval(animateMove, speed); // Start animation
    }

    function animateMove() {
        var elem = moveInfo.elem;
        var dir = moveInfo.dir;

        var pos = parseInt(elem[(moveInfo.whichPos == "left") ? "offsetLeft" : "offsetTop"]);

        if (((dir == 1) && (pos >= moveInfo.endPos)) || ((dir == -1) && (pos <= moveInfo.endPos))) {  // alert(moveInfo.state); 
            if (moveInfo.state == "up") {
                moveInfo.state = "hor";
                moveInfo.whichPos = "left";
                moveInfo.dir = 1;
                if (moveInfo.fromBar > moveInfo.toBar) moveInfo.dir = -1;
                //alert("toBar:" + moveInfo.toBar);
                var toBar = document.getElementById("bar" + moveInfo.toBar);
                // Next line: 15px is half of tower width    
                moveInfo.endPos = toBar.offsetLeft - Math.floor(elem.offsetWidth / 2) + 15;
                return;
            }

            else if (moveInfo.state == "hor") // move down
            {
                moveInfo.state = "down";
                moveInfo.whichPos = "top";
                moveInfo.dir = 1;
                //alert(elem.offsetHeight);
                moveInfo.endPos = document.getElementById("bottombar").offsetTop - (barsInfo[moveInfo.toBar].disks.length + 1) * elem.offsetHeight;
                return;
            }

            else // end of current call to moveDisk, issue next call
            {
                clearInterval(myTimer);  // cancel timer 
                barsInfo[moveInfo.toBar].disks.push(elem.id);
                moveDisk();
                return;
            }
        }


        // Move Disk
        pos = pos + dir * moveInc;
        elem.style[moveInfo.whichPos] = pos + "px";

        // Move the inside middle image
        if (moveInfo.state == "up") {
            var fromBar = document.getElementById("bar" + moveInfo.fromBar);
            if (elem.offsetTop < fromBar.offsetTop) {
                var x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
                if (x > 0) elem.getElementsByClassName("insideImg")[0].style.height = x - moveInc + "px";
            }
        }

        if (moveInfo.state == "down") {
            var toBar = document.getElementById("bar" + moveInfo.toBar);
            if (elem.offsetTop > toBar.offsetTop) {
                var x = elem.getElementsByClassName("insideImg")[0].offsetHeight;
                if (x < 14) elem.getElementsByClassName("insideImg")[0].style.height = x + moveInc + "px";
            }
        }

    }





  const popup = {'padding':'100px'}
    
    return (
      <React.Fragment>
        <Button  style={{ 'marginLeft' : '84px', display: "block", }} color="primary" onClick={handleClickOpen}>
          Try it out
        </Button>
        <Dialog
          fullWidth={fullWidth}
          maxWidth={maxWidth}
          open={open}
          onClose={handleClose}
          style={popup}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">Tower of Hanoi</DialogTitle>

          <DialogContent>

            <DialogContentText>
             Visualization
            </DialogContentText>

             <div >

                  <div id="bar0"><img src={Bar} /></div>

                  <div id="bar1"><img src={Bar} /></div>

                  <div id="bar2"><img src={Bar} /></div>
                  <div id="bottombar"></div>

                  <div class="disk" id="disk0" ><img class="insideImg"  style={{ "marginLeft" : "94px" }} src={Bar2} /></div> 
                  <div class="disk" id="disk1" ><img class="insideImg"  style={{ "marginLeft" : "74px" }}  src={Bar2}  /></div> 
                  <div class="disk" id="disk2" ><img class="insideImg"  style={{ "marginLeft" : "54px" }}  src={Bar2}  /></div> 
                  <div class="disk" id="disk3" ><img class="insideImg"  style={{ "marginLeft" : "34px" }}  src={Bar2}  /></div> 
                  <div class="disk" id="disk4" ><img class="insideImg"  style={{ "marginLeft" : "14px" }}  src={Bar2}  /></div> 

                  <button 
                     onclick={executeHanoi}
                    >
                    Start
                  </button>
                   
                  <label>Speed <select id="speedSelectList" >
                  <option  value="1" >fast</option>
                  <option  value="10" >medium</option>
                  <option  value="20" >slow</option>
                  </select>
                  </label>

                  <label>No. of Disks<select id="diskSelectList" >
                  <option  value="5" >5 disks</option>
                  <option  value="4" >4 disks</option>
                  <option  value="3" >3 disks</option>
                  </select>
                  </label>
              </div> 
           
           

          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );

}

