
    
function AddChild() {
  chname = document.getElementById("cfname").value;
  chbday = document.getElementById("cbirthday").value;
  chgud = document.getElementById("cmg").value;
  chprdes = document.getElementById("donation").value;
  var table = document.getElementById("ChildInfo");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = chname;
  cell2.innerHTML = chbday;
  cell3.innerHTML = chgud;
  cell4.innerHTML = chprdes;
}
function AddExexutors() {
  fname = document.getElementById("exfname").value;
  xid = document.getElementById("exid").value;
  xbirthday = document.getElementById("exbirthday").value;
  exAddress = document.getElementById("eAddress").value;
  var table = document.getElementById("ExexutorsInfo");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = fname;
  cell2.innerHTML = xid;
  cell3.innerHTML = xbirthday;
  cell4.innerHTML = exAddress;
}
function AddBequests() {
  fname = document.getElementById("qfname").value;
  qid = document.getElementById("qrelation").value;
  qRelationship = document.getElementById("qaddress").value;
  qAddress = document.getElementById("eAddress").value;
  var table = document.getElementById("BEQUESTS");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = fname;
  cell2.innerHTML = qid;
  cell3.innerHTML = qRelationship;
  cell4.innerHTML = qAddress;
}
function previewwill(){
  tfname = document.getElementById("fname").value;
  tlname = document.getElementById("lname").value;
  tbday = document.getElementById("birthday").value;
  tcity = document.getElementById("city").value;
  tcountry = document.getElementById("country").value;
  tid = document.getElementById("idnum").value;
  document.getElementById("PInfo").style.display="none";
  
  document.getElementById("MyDec").innerHTML ="<div><p>I," +tfname +" "+tlname+", born on "+tbday+", with ID number: "+tid+" & resident in the City of "+tcity+", "+tcountry+", being of sound mind, not acting under duress or undue influence, and fully understanding the nature and extent of all my property and of this disposition thereof, do hereby make, publish, and declare <b>this document</b> to be my Last Will and Testament, and hereby revoke any and all other wills and codicils heretofore made by me.</p></div>";
  document.getElementById("chinfo").style.display= "none";
  document.getElementById("chdec").innerHTML = "<div><p>The names of my children are listed below. Unless otherwise specifically indicated in this Will, any provision for my children includes the below-named children, as well as any child of mine hereafter born or adopted. </p></div>"
  document.getElementById("beqinfo").style.display="none";
  document.getElementById("beqdec").innerHTML = "<div><p>I give to the persons named below the following specific bequests, if owned by me at the time of my death:</p></div>";
  document.getElementById("exinfo").style.display="none";
  document.getElementById("exdec").innerHTML = "<div><p>I declare the below person(s) to carry out my wishes after my demise for any reason:</p></div>";
  document.getElementById("addwishes").style.display="none";
  document.getElementById("adddet").innerHTML = "ADDITIONAL INFORMATION";
  
  document.getElementById("previewform").style.display="none";



  
  
  alert("Will Preview Created");
}
 