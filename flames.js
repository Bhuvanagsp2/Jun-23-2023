function checknum(as)
{
        var dd = as.value;
        if(!isNaN(dd))
        {
                dd = dd.substring(0,(dd.length-1));
                as.value = dd;
        }	
}

function calc() 
{
        var Yourname = document.getElementById('yourname').value;
        var Lovername = document.getElementById('lovername').value;
        if (Yourname=='') {
                alert("Enter Your Name");
	}
	else if (Lovername=='') {
		alert("Enter Lover Name");
	}
        var r = /\s+/g;
        var orsudokuform = document.sudokuform.name.value.toUpperCase();
        var nam=orsudokuform;
        orsudokuform = orsudokuform.replace(r,"");
        if(orsudokuform!="")
        {
                var count = 0;
                var sudokuform = orsudokuform;	
                second = eval("document.sudokuform.name"+1).value.toUpperCase();
                var names=second;
                second = second.replace(r,"");	
                if(second != "")
                {
                        document.getElementById("footer").style.display = 'block';
                        for(var xx=0; xx<sudokuform.length; xx++)
                        {
                                for(var yy=0; yy<second.length; yy++)
                                {
                                        if(sudokuform[xx] == second[yy])
                                        {
                                                var a1 = sudokuform.substring(0,xx);
                                                var a2 = sudokuform.substring(xx+1,sudokuform.length);
                                                sudokuform = a1+a2;
                                                xx=-1;
                                                var b1 = second.substring(0,yy);
                                                var b2 = second.substring(yy+1,second.length);
                                                second = b1+b2;
                                                yy=-1;
                                                break;
                                        }
                                }
                        }
                        var ss=(sudokuform+second);
                        var l=ss.length;
                        var ar = new Array("F", "L", "A", "M", "E", "S");
                        var stp=1;
                        for(var x=6; x>1; x--)
                        {
                                var g=((l%x)+stp)-1;
                                if(g>x)
                                {
                                        g=g%x;
                                }
                                if(g==0)
                                {
                                        g=ar.length;
                                }
                                ar.splice(g-1,1);
                                stp=g;
                        }
                        if(ar=="F")
                        {
                                //result="FRIENDS"
                                document.getElementById("msg").innerHTML = 'FRIENDS';
                                document.getElementById("msg").style.color='blue';
                        }
                        else if(ar=="L")
                        {
                                //result="LOVER"
                                document.getElementById("msg").innerHTML = 'LOVER';
                                document.getElementById("msg").style.color='#FF0080';
                        }
                        else if(ar=="A")
                        {
                                //result="AFFECTION"
                                document.getElementById("msg").innerHTML = 'AFFECTION';
                                document.getElementById("msg").style.color='#008080';
                        } 
                        else if(ar=="M")
                        {
                                //result="MARRIAGE"
                                document.getElementById("msg").innerHTML = 'MARRIAGE';
                                document.getElementById("msg").style.color='green';
                        }
                        else if(ar=="E")
                        {	
                                //result="ENEMY"
                                document.getElementById("msg").innerHTML = 'ENEMY';
                                document.getElementById("msg").style.color='#FF0000';
                        }
                        else if(ar=="S")
                        {
                                //result="SISTER"
                                document.getElementById("msg").innerHTML = 'SISTER';
                                document.getElementById("msg").style.color='#7d0230';
                        }
                        document.getElementById("nam"+1).style.display = 'block';
                        document.getElementById("nam"+1).textContent=nam + " & " +names;
                }
                else
                {
                        document.getElementById("nam"+1).style.display = 'none';
                        count++; 
                        if(count==4)
                        {
                                alert("Enter anyone of your partner name");
                                document.getElementById("footer").style.display = 'block';
                        }
                }          
        }
        else
        {
                return false;
        }
}