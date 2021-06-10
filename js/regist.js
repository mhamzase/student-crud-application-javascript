var Urls={};
var imge;
var url;
function getUrl(event){
	// alert("done");
	var fullname = $("#fn").val();
	var email = $("#email").val();
	var phoneNo = $("#phoneNo").val();
	var course = $("#course");
	var chooseCourse = $(course).children("option:selected").val();
	 var name_first_latter = fullname.substring(0,1);
	 var email_first_latter = email.substring(0,1);
	 var last_two_phone_latters = phoneNo.substring(10,12);
	 var last_two_qualify_latters = chooseCourse.substring(2,4);
	 var rollNo = last_two_qualify_latters+last_two_phone_latters+name_first_latter+email_first_latter;
	delete Urls[rollNo];
	// alert(Urls.hasOwnProperty(rollNo));
	var fileElement=$("#fileDemo");
	 url=URL.createObjectURL(event.target.files[0]);
	 Urls[rollNo]=url;	

    
}
			var data1 = [];
			var data2 = [];
			var data3 = [];
			var data4 = [];
			var data5 = [];
			var data6 = [];
			var data7 = [];
			var data8 = [];
			var data9 = [];

			var n = 1;
			var x = 0;
			function addRecord(){
					
				var fullname = $("#fn").val();
				var email = $("#email").val();
				var phoneNo = $("#phoneNo").val();
				var dob_temp = $("#date").val();
				var password = $("#password").val();
				var cpassword = $("#cpassword").val();
				var gender = $('input[name="gender"]');
				for(i=0 ; i<gender.length ; i++)
					{
						if(gender[i].checked)
						{
							var gender_selected = gender[i].value;
						}
					}

				var dob_year = dob_temp.substring(6,10);


				var course = $("#course");
				var chooseCourse = $(course).children("option:selected").val();
					
					if(chooseCourse!=null){
						saveRecord(chooseCourse);
					}
					else{
						chooseCourse=updateRecord();
					}
					


						var fullname_pattern = /^[a-zA-Z ]+$/;
						var email_pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
						var phone_pattern = /03[0-9]{2}-[0-9]{7}/;
						var errorDiv = $("#showError");

						var successDiv = $("#showSuccess");
						$(successDiv).css("display", "none");
						

							if((fullname !== "") && fullname.trim())   // checking name is empty or not
							{
								$(errorDiv).css("display", "none");
								if(fullname_pattern.test(fullname))       // checking name is valid or not
								{
									$(errorDiv).css("display", "none");
									if(fullname.length >= 5)        // checking fullname latters must be greater than 5
									{
										$(errorDiv).css("display", "none");
										if(email !== "")                  // checking email is empty or not
										{
											$(errorDiv).css("display", "none");
											if(email_pattern.test(email))      // checking email is valid or not
											{
												$(errorDiv).css("display", "none");
												if(password !== "")               // checking password is empty or not
												{
													$(errorDiv).css("display", "none");
													if(cpassword !== "")                 // checking confirm password is empty or not
													{
														$(errorDiv).css("display", "none");
														if(password === cpassword)       // checking both password same or not
														{
															$(errorDiv).css("display", "none");
															if(phoneNo !== "")           // checking phone number is empty or not
															{
																$(errorDiv).css("display", "none");
																if(phoneNo.length >= 12 && phoneNo.length <=12 && phone_pattern.test(phoneNo))  // checking phone number is valid or not
																{
																	$(errorDiv).css("display", "none");
																	if(chooseCourse != "")
																	{
																		if(BSCS() && document.getElementById("BSCS").style.display == "block")
																		{
																			var selected_subjects = BSCS();
																			$(errorDiv).css("display", "none");
																			if(gender_selected != null)     // checking gender selected or not
																			{
																				$(errorDiv).css("display", "none");
																				if(dob_temp != "")      // checking date of birth is selected or not
																				{
																					$(errorDiv).css("display", "none");
																					if(parseInt(dob_year) < 2010)
																					{
																						
																							removeBtn();

																							var container=document.getElementById("images");
																			    			//container.classList.add("show");
																			    			var oInput = document.getElementById('images'),oChild;
																			    
																			   				 for(i = 0; i < oInput.childNodes.length; i++)
																			   				 {
																				       			 oChild = oInput.childNodes[i];
																				        		if(oChild.nodeName == 'IMG')
																				        		{
																					            	var m=document.getElementById(oChild.id);
																					             	m.style.display="block";
																					             	m.style.width="300px";
																					             	m.style.height="300px";
																				      			  }
																			    			}
																						    var fileElement=document.getElementById("fileDemo");
																						    fileElement.value="";

																							
	 
																							dob = dob_year;

																							var AddRown = document.getElementById('add_table');
																							var NewRow = AddRown.insertRow(n);

																							// gendeerating roll number

																							var name_first_latter = fullname.substring(0,1);
																							var email_first_latter = email.substring(0,1);
																							var last_two_phone_latters = phoneNo.substring(10,12);
																							var last_two_qualify_latters = chooseCourse.substring(2,4);
																							
																							var rollNo = last_two_qualify_latters+last_two_phone_latters+name_first_latter+email_first_latter;

																							
																						

																							var div=document.createElement("div");
																							var input=document.createElement("span");
																							input.setAttribute("id",rollNo);
																							input.style.display="none";
																							var img=document.createElement("img");
																							var imge=img;
																							imge.style.width="60px";
																							imge.setAttribute("id","profile")
																							imge.style.height="60px";
																							imge.style.borderRadius="100%";
																							imge.style.margin="auto";
																							//_working
																							$(imge).attr("src", Urls[rollNo]);
																							input.innerHTML=imgText;
																							div.appendChild(imge);
																							div.appendChild(input);
											
																						    $("#course").val("");		


																							data1[x] = div;
																							data2[x] = fullname;
																							data3[x] = email;
																							//roll
																							data4[x] = rollNo;
																							data5[x] = phoneNo;
																							data6[x] = chooseCourse;
																							data7[x] = selected_subjects;
																							data8[x] = gender_selected;
																							data9[x] = dob_temp;
																							
																							var cel1 = NewRow.insertCell(0);
																							var cel2 = NewRow.insertCell(1);
																							var cel3 = NewRow.insertCell(2);
																							var cel4 = NewRow.insertCell(3);
																							var cel5 = NewRow.insertCell(4);
																							var cel6 = NewRow.insertCell(5);
																							var cel7 = NewRow.insertCell(6);
																							var cel8 = NewRow.insertCell(7);
																							var cel9 = NewRow.insertCell(8);
																							var cel10 = NewRow.insertCell(9);
																							var cel11 = NewRow.insertCell(10);


																							
																							cel1.appendChild(div);
																							cel2.innerHTML = data2[x];
																							cel3.innerHTML = data3[x];
																							cel4.innerHTML = data4[x];
																							cel5.innerHTML = data5[x];
																							cel6.innerHTML = data6[x];
																							cel7.innerHTML = data7[x];
																							cel8.innerHTML = data8[x];
																							cel9.innerHTML = data9[x];
																							cel10.innerHTML = "<button class='btn btn-primary'>Edit</button>"
																							cel11.innerHTML = "<button class='btn btn-danger'>Delete</button>";

				
																			
																							cel11.onclick = function deleteRecord(){
																									$(successDiv).css("display", "none");
																									$("#showEdit").css("display","none");
																									NewRow.style.display = 'none';
																									$("#course").select2({allowClear: true});
																								}

																							// function to edit a record by clicking edit button

																							cel10.onclick = function editRecord(){
																								
																							
																								updateCourse(chooseCourse);
																								$(errorDiv).css("display", "none");
																								
																								
																								var showText=document.getElementById(rollNo).innerHTML;

																								$("#fn").val(cel2.innerHTML);
																								$("#email").val(cel3.innerHTML);
																								$("#password").val(password);
																								$("#cpassword").val(cpassword);
																								$("#phoneNo").val(cel5.innerHTML);
																								
																								$(course).children("option:selected").val(cel6.innerHTML);
																								$("#BSCS").css("display","block");
																								

																								var all_sub = cel7.innerHTML.split(" ");

																								for(var i=0 ; i<all_sub.length ; i++)
																								{
																									if(all_sub[i] == "CS201")
																									{
																										$("#CS201").prop("checked",true)
																									}
																									if(all_sub[i] == "MTH101")
																									{
																										$("#MTH101").prop("checked",true)
																									}
																									if(all_sub[i] == "CS404")
																									{
																										$("#CS404").prop("checked",true)
																									}
																									if(all_sub[i] == "MTH502")
																									{
																										$("#MTH502").prop("checked",true)
																									}
																								}

																								setImgText(showText);
																								if(gender_selected == "Female")
																								{
																									$("#female").prop("checked",true);	
																								}
																								else
																								{
																									$("#male").prop("checked",true);	
																								}
																								$("#date").val(dob_temp);
																								$(errorDiv).css("display", "none");
																								$(successDiv).css("display", "none");
																							var Edit = "You're in Editing Mode";
																							$("#nameEdit").html(Edit);
																							$("#showEdit").css("display","block");
																								$(NewRow).css("display", "none");
																								
																							}

																							$(cel1).css("border","1px solid black");
																							$(cel2).css("border","1px solid black");
																							$(cel3).css("border","1px solid black");
																							$(cel4).css("border","1px solid black");
																							$(cel5).css("border","1px solid black");
																							$(cel6).css("border","1px solid black");
																							$(cel7).css("border","1px solid black");
																							$(cel8).css("border","1px solid black");
																							$(cel9).css("border","1px solid black");
																							$(cel10).css("borderBottom","1px solid black");
																							$(cel11).css("borderBottom","1px solid black");
																							

																							var success = "Registered Successfully!";
																							$("#nameSuccess").html(success);
																							$("#showSuccess").css("display","block");
																							

																							$("#fn").val("");
																							$("#email").val("");
																							$("#password").val("");
																							$("#cpassword").val("");
																							$("#phoneNo").val("");

																							if($("#CS201").prop("checked",true) || $("#MTH101").prop("checked",true) || $("#CS404").prop("checked",true) || $("#MTH502").prop("checked",true))
																							{
																								$("#CS201").prop("checked",false);
																								$("#MTH101").prop("checked",false);
																								$("#CS404").prop("checked",false);
																								$("#MTH502").prop("checked",false);
																							}
																						

																							for(i=0 ; i<gender.length ; i++)
																							{
																								document.getElementsByName("gender")[i].checked = null;
																							}
																							$("#date").val("");
																							
																							$("#BSCS").css("display","none");
																							$("#BSSE").css("display","none");
																							$("#BSIT").css("display","none");
																							$("#BSBA").css("display","none");
																							$("#course").select2({allowClear: true});
																							$("#showEdit").css("display","none");

																							n++;
																							x++;
																					}
																					else
																					{
																						var error = "Year must be less then 2010";
																						showError(error);
																					}		
																				}
																				else
																				{
																					var error = "Please select your Date Of Birth";
																					showError(error);
																				}
																			}
																			else
																			{
																				var error = "Please select the gender";
																				showError(error);
																			}
																		}
																		else if(BSSE() && document.getElementById("BSSE").style.display == "block")
																		{
																			selected_subjects = BSSE();
																			$(errorDiv).css("display", "none");
																			if(gender_selected != null)     // checking gender selected or not
																			{
																				$(errorDiv).css("display", "none");
																				if(dob_temp != "")      // checking date of birth is selected or not
																				{
																					$(errorDiv).css("display", "none");
																					if(parseInt(dob_year) < 2010)
																					{
																						removeBtn();

																							var container=document.getElementById("images");
																			    			//container.classList.add("show");
																			    			var oInput = document.getElementById('images'),oChild;
																			    
																			   				 for(i = 0; i < oInput.childNodes.length; i++)
																			   				 {
																				       			 oChild = oInput.childNodes[i];
																				        		if(oChild.nodeName == 'IMG')
																				        		{
																					            	var m=document.getElementById(oChild.id);
																					             	m.style.display="block";
																					             	m.style.width="300px";
																					             	m.style.height="300px";
																				      			  }
																			    			}
																						    var fileElement=document.getElementById("fileDemo");
																						    fileElement.value="";

																							
	 
																							dob = dob_year;

																							var AddRown = document.getElementById('add_table');
																							var NewRow = AddRown.insertRow(n);

																							// gendeerating roll number

																							var name_first_latter = fullname.substring(0,1);
																							var email_first_latter = email.substring(0,1);
																							var last_two_phone_latters = phoneNo.substring(10,12);
																							var last_two_qualify_latters = chooseCourse.substring(2,4);
																							
																							var rollNo = last_two_qualify_latters+last_two_phone_latters+name_first_latter+email_first_latter;

																							
																						

																							var div=document.createElement("div");
																							var input=document.createElement("span");
																							input.setAttribute("id",rollNo);
																							input.style.display="none";
																							var img=document.createElement("img");
																							var imge=img;
																							imge.style.width="60px";
																							imge.setAttribute("id","profile")
																							imge.style.height="60px";
																							imge.style.borderRadius="100%";
																							imge.style.margin="auto";
																							//_working
																							$(imge).attr("src", Urls[rollNo]);
																							input.innerHTML=imgText;
																							div.appendChild(imge);
																							div.appendChild(input);
											
																						    $("#course").val("");		


																							data1[x] = div;
																							data2[x] = fullname;
																							data3[x] = email;
																							//roll
																							data4[x] = rollNo;
																							data5[x] = phoneNo;
																							data6[x] = chooseCourse;
																							data7[x] = selected_subjects;
																							data8[x] = gender_selected;
																							data9[x] = dob_temp;
																							
																							var cel1 = NewRow.insertCell(0);
																							var cel2 = NewRow.insertCell(1);
																							var cel3 = NewRow.insertCell(2);
																							var cel4 = NewRow.insertCell(3);
																							var cel5 = NewRow.insertCell(4);
																							var cel6 = NewRow.insertCell(5);
																							var cel7 = NewRow.insertCell(6);
																							var cel8 = NewRow.insertCell(7);
																							var cel9 = NewRow.insertCell(8);
																							var cel10 = NewRow.insertCell(9);
																							var cel11 = NewRow.insertCell(10);


																							
																							cel1.appendChild(div);
																							cel2.innerHTML = data2[x];
																							cel3.innerHTML = data3[x];
																							cel4.innerHTML = data4[x];
																							cel5.innerHTML = data5[x];
																							cel6.innerHTML = data6[x];
																							cel7.innerHTML = data7[x];
																							cel8.innerHTML = data8[x];
																							cel9.innerHTML = data9[x];
																							cel10.innerHTML = "<button class='btn btn-primary'>Edit</button>"
																							cel11.innerHTML = "<button class='btn btn-danger'>Delete</button>";

				
																			
																							cel11.onclick = function deleteRecord(){
																									$(successDiv).css("display", "none");
																									$("#showEdit").css("display","none");
																									NewRow.style.display = 'none';
																									$("#course").select2({allowClear: true});
																								}

																							// function to edit a record by clicking edit button

																							cel10.onclick = function editRecord(){
																								
																							
																								updateCourse(chooseCourse);
																								$(errorDiv).css("display", "none");
																								
																								
																								var showText=document.getElementById(rollNo).innerHTML;

																								$("#fn").val(cel2.innerHTML);
																								$("#email").val(cel3.innerHTML);
																								$("#password").val(password);
																								$("#cpassword").val(cpassword);
																								$("#phoneNo").val(cel5.innerHTML);
																								
																								$(course).children("option:selected").val(cel6.innerHTML);
																								$("#BSSE").css("display","block");
																								

																								var all_sub = cel7.innerHTML.split(" ");

																								for(var i=0 ; i<all_sub.length ; i++)
																								{
																									if(all_sub[i] == "CS304")
																									{
																										$("#CS304").prop("checked",true)
																									}
																									if(all_sub[i] == "MTH202")
																									{
																										$("#MTH202").prop("checked",true)
																									}
																									if(all_sub[i] == "CS601")
																									{
																										$("#CS601").prop("checked",true)
																									}
																									if(all_sub[i] == "MTH501")
																									{
																										$("#MTH501").prop("checked",true)
																									}
																								}

																								setImgText(showText);
																								if(gender_selected == "Female")
																								{
																									$("#female").prop("checked",true);	
																								}
																								else
																								{
																									$("#male").prop("checked",true);	
																								}
																								$("#date").val(dob_temp);
																								$(errorDiv).css("display", "none");
																								$(successDiv).css("display", "none");
																							var Edit = "You're in Editing Mode";
																							$("#nameEdit").html(Edit);
																							$("#showEdit").css("display","block");
																								$(NewRow).css("display", "none");
																								
																							}

																							$(cel1).css("border","1px solid black");
																							$(cel2).css("border","1px solid black");
																							$(cel3).css("border","1px solid black");
																							$(cel4).css("border","1px solid black");
																							$(cel5).css("border","1px solid black");
																							$(cel6).css("border","1px solid black");
																							$(cel7).css("border","1px solid black");
																							$(cel8).css("border","1px solid black");
																							$(cel9).css("border","1px solid black");
																							$(cel10).css("borderBottom","1px solid black");
																							$(cel11).css("borderBottom","1px solid black");
																							

																							var success = "Registered Successfully!";
																							$("#nameSuccess").html(success);
																							$("#showSuccess").css("display","block");
																							

																							$("#fn").val("");
																							$("#email").val("");
																							$("#password").val("");
																							$("#cpassword").val("");
																							$("#phoneNo").val("");

																							if($("#CS304").prop("checked",true) || $("#MTH202").prop("checked",true) || $("#CS601").prop("checked",true) || $("#MTH501").prop("checked",true))
																							{
																								$("#CS304").prop("checked",false);
																								$("#MTH202").prop("checked",false);
																								$("#CS601").prop("checked",false);
																								$("#MTH501").prop("checked",false);
																							}
																						

																							for(i=0 ; i<gender.length ; i++)
																							{
																								document.getElementsByName("gender")[i].checked = null;
																							}
																							$("#date").val("");
																							
																							$("#BSCS").css("display","none");
																							$("#BSSE").css("display","none");
																							$("#BSIT").css("display","none");
																							$("#BSBA").css("display","none");
																							$("#course").select2({allowClear: true});
																							$("#showEdit").css("display","none");

																							n++;
																							x++;

																					}
																					else
																					{
																						var error = "Year must be less then 2010";
																						showError(error);
																					}		
																				}
																				else
																				{
																					var error = "Please select your Date Of Birth";
																					showError(error);
																				}
																			}
																			else
																			{
																				var error = "Please select the gender";
																				showError(error);
																			}
																		}
																		else if(BSIT() && document.getElementById("BSIT").style.display == "block")
																		{
																			selected_subjects = BSIT();
																			$(errorDiv).css("display", "none");
																			if(gender_selected != null)     // checking gender selected or not
																			{
																				$(errorDiv).css("display", "none");
																				if(dob_temp != "")      // checking date of birth is selected or not
																				{
																					$(errorDiv).css("display", "none");
																					if(parseInt(dob_year) < 2010)
																					{
																						removeBtn();

																							var container=document.getElementById("images");
																			    			//container.classList.add("show");
																			    			var oInput = document.getElementById('images'),oChild;
																			    
																			   				 for(i = 0; i < oInput.childNodes.length; i++)
																			   				 {
																				       			 oChild = oInput.childNodes[i];
																				        		if(oChild.nodeName == 'IMG')
																				        		{
																					            	var m=document.getElementById(oChild.id);
																					             	m.style.display="block";
																					             	m.style.width="300px";
																					             	m.style.height="300px";
																				      			  }
																			    			}
																						    var fileElement=document.getElementById("fileDemo");
																						    fileElement.value="";

																							
	 
																							dob = dob_year;

																							var AddRown = document.getElementById('add_table');
																							var NewRow = AddRown.insertRow(n);

																							// gendeerating roll number

																							var name_first_latter = fullname.substring(0,1);
																							var email_first_latter = email.substring(0,1);
																							var last_two_phone_latters = phoneNo.substring(10,12);
																							var last_two_qualify_latters = chooseCourse.substring(2,4);
																							
																							var rollNo = last_two_qualify_latters+last_two_phone_latters+name_first_latter+email_first_latter;

																							
																						

																							var div=document.createElement("div");
																							var input=document.createElement("span");
																							input.setAttribute("id",rollNo);
																							input.style.display="none";
																							var img=document.createElement("img");
																							var imge=img;
																							imge.style.width="60px";
																							imge.setAttribute("id","profile")
																							imge.style.height="60px";
																							imge.style.borderRadius="100%";
																							imge.style.margin="auto";
																							//_working
																							$(imge).attr("src", Urls[rollNo]);
																							input.innerHTML=imgText;
																							div.appendChild(imge);
																							div.appendChild(input);
											
																						    $("#course").val("");		


																							data1[x] = div;
																							data2[x] = fullname;
																							data3[x] = email;
																							//roll
																							data4[x] = rollNo;
																							data5[x] = phoneNo;
																							data6[x] = chooseCourse;
																							data7[x] = selected_subjects;
																							data8[x] = gender_selected;
																							data9[x] = dob_temp;
																							
																							var cel1 = NewRow.insertCell(0);
																							var cel2 = NewRow.insertCell(1);
																							var cel3 = NewRow.insertCell(2);
																							var cel4 = NewRow.insertCell(3);
																							var cel5 = NewRow.insertCell(4);
																							var cel6 = NewRow.insertCell(5);
																							var cel7 = NewRow.insertCell(6);
																							var cel8 = NewRow.insertCell(7);
																							var cel9 = NewRow.insertCell(8);
																							var cel10 = NewRow.insertCell(9);
																							var cel11 = NewRow.insertCell(10);


																							
																							cel1.appendChild(div);
																							cel2.innerHTML = data2[x];
																							cel3.innerHTML = data3[x];
																							cel4.innerHTML = data4[x];
																							cel5.innerHTML = data5[x];
																							cel6.innerHTML = data6[x];
																							cel7.innerHTML = data7[x];
																							cel8.innerHTML = data8[x];
																							cel9.innerHTML = data9[x];
																							cel10.innerHTML = "<button class='btn btn-primary'>Edit</button>"
																							cel11.innerHTML = "<button class='btn btn-danger'>Delete</button>";

				
																			
																							cel11.onclick = function deleteRecord(){
																									$(successDiv).css("display", "none");
																									$("#showEdit").css("display","none");
																									NewRow.style.display = 'none';
																									$("#course").select2({allowClear: true});
																								}

																							// function to edit a record by clicking edit button

																							cel10.onclick = function editRecord(){
																								
																							
																								updateCourse(chooseCourse);
																								$(errorDiv).css("display", "none");
																								
																								
																								var showText=document.getElementById(rollNo).innerHTML;

																								$("#fn").val(cel2.innerHTML);
																								$("#email").val(cel3.innerHTML);
																								$("#password").val(password);
																								$("#cpassword").val(cpassword);
																								$("#phoneNo").val(cel5.innerHTML);
																								
																								$(course).children("option:selected").val(cel6.innerHTML);
																								$("#BSIT").css("display","block");
																								

																								var all_sub = cel7.innerHTML.split(" ");

																								for(var i=0 ; i<all_sub.length ; i++)
																								{
																									if(all_sub[i] == "CS401")
																									{
																										$("#CS401").prop("checked",true)
																									}
																									if(all_sub[i] == "MGT301")
																									{
																										$("#MGT301").prop("checked",true)
																									}
																									if(all_sub[i] == "CS403")
																									{
																										$("#CS403").prop("checked",true)
																									}
																									if(all_sub[i] == "MCM301")
																									{
																										$("#MCM301").prop("checked",true)
																									}
																								}

																								setImgText(showText);
																								if(gender_selected == "Female")
																								{
																									$("#female").prop("checked",true);	
																								}
																								else
																								{
																									$("#male").prop("checked",true);	
																								}
																								$("#date").val(dob_temp);
																								$(errorDiv).css("display", "none");
																								$(successDiv).css("display", "none");
																							var Edit = "You're in Editing Mode";
																							$("#nameEdit").html(Edit);
																							$("#showEdit").css("display","block");
																								$(NewRow).css("display", "none");
																								
																							}

																							$(cel1).css("border","1px solid black");
																							$(cel2).css("border","1px solid black");
																							$(cel3).css("border","1px solid black");
																							$(cel4).css("border","1px solid black");
																							$(cel5).css("border","1px solid black");
																							$(cel6).css("border","1px solid black");
																							$(cel7).css("border","1px solid black");
																							$(cel8).css("border","1px solid black");
																							$(cel9).css("border","1px solid black");
																							$(cel10).css("borderBottom","1px solid black");
																							$(cel11).css("borderBottom","1px solid black");
																							

																							var success = "Registered Successfully!";
																							$("#nameSuccess").html(success);
																							$("#showSuccess").css("display","block");
																							

																							$("#fn").val("");
																							$("#email").val("");
																							$("#password").val("");
																							$("#cpassword").val("");
																							$("#phoneNo").val("");

																							if($("#CS401").prop("checked",true) || $("#MGT301").prop("checked",true) || $("#CS403").prop("checked",true) || $("#MCM301").prop("checked",true))
																							{
																								$("#CS401").prop("checked",false);
																								$("#MGT301").prop("checked",false);
																								$("#CS403").prop("checked",false);
																								$("#MCM301").prop("checked",false);
																							}
																						

																							for(i=0 ; i<gender.length ; i++)
																							{
																								document.getElementsByName("gender")[i].checked = null;
																							}
																							$("#date").val("");
																							
																							$("#BSCS").css("display","none");
																							$("#BSSE").css("display","none");
																							$("#BSIT").css("display","none");
																							$("#BSBA").css("display","none");
																							$("#course").select2({allowClear: true});
																							$("#showEdit").css("display","none");

																							n++;
																							x++;
																					}
																					else
																					{
																						var error = "Year must be less then 2010";
																						showError(error);
																					}		
																				}
																				else
																				{
																					var error = "Please select your Date Of Birth";
																					showError(error);
																				}
																			}
																			else
																			{
																				var error = "Please select the gender";
																				showError(error);
																			}
																		}
																		else if(BSBA() && document.getElementById("BSBA").style.display == "block")
																		{
																			selected_subjects = BSBA();
																			$(errorDiv).css("display", "none");
																			if(gender_selected != null)     // checking gender selected or not
																			{
																				$(errorDiv).css("display", "none");
																				if(dob_temp != "")      // checking date of birth is selected or not
																				{
																					$(errorDiv).css("display", "none");
																					if(parseInt(dob_year) < 2010)
																					{
																						removeBtn();

																							var container=document.getElementById("images");
																			    			//container.classList.add("show");
																			    			var oInput = document.getElementById('images'),oChild;
																			    
																			   				 for(i = 0; i < oInput.childNodes.length; i++)
																			   				 {
																				       			 oChild = oInput.childNodes[i];
																				        		if(oChild.nodeName == 'IMG')
																				        		{
																					            	var m=document.getElementById(oChild.id);
																					             	m.style.display="block";
																					             	m.style.width="300px";
																					             	m.style.height="300px";
																				      			  }
																			    			}
																						    var fileElement=document.getElementById("fileDemo");
																						    fileElement.value="";

																							
	 
																							dob = dob_year;

																							var AddRown = document.getElementById('add_table');
																							var NewRow = AddRown.insertRow(n);

																							// gendeerating roll number

																							var name_first_latter = fullname.substring(0,1);
																							var email_first_latter = email.substring(0,1);
																							var last_two_phone_latters = phoneNo.substring(10,12);
																							var last_two_qualify_latters = chooseCourse.substring(2,4);
																							
																							var rollNo = last_two_qualify_latters+last_two_phone_latters+name_first_latter+email_first_latter;

																							
																						

																							var div=document.createElement("div");
																							var input=document.createElement("span");
																							input.setAttribute("id",rollNo);
																							input.style.display="none";
																							var img=document.createElement("img");
																							var imge=img;
																							imge.style.width="60px";
																							imge.setAttribute("id","profile")
																							imge.style.height="60px";
																							imge.style.borderRadius="100%";
																							imge.style.margin="auto";
																							//_working
																							$(imge).attr("src", Urls[rollNo]);
																							input.innerHTML=imgText;
																							div.appendChild(imge);
																							div.appendChild(input);
											
																						    $("#course").val("");		


																							data1[x] = div;
																							data2[x] = fullname;
																							data3[x] = email;
																							//roll
																							data4[x] = rollNo;
																							data5[x] = phoneNo;
																							data6[x] = chooseCourse;
																							data7[x] = selected_subjects;
																							data8[x] = gender_selected;
																							data9[x] = dob_temp;
																							
																							var cel1 = NewRow.insertCell(0);
																							var cel2 = NewRow.insertCell(1);
																							var cel3 = NewRow.insertCell(2);
																							var cel4 = NewRow.insertCell(3);
																							var cel5 = NewRow.insertCell(4);
																							var cel6 = NewRow.insertCell(5);
																							var cel7 = NewRow.insertCell(6);
																							var cel8 = NewRow.insertCell(7);
																							var cel9 = NewRow.insertCell(8);
																							var cel10 = NewRow.insertCell(9);
																							var cel11 = NewRow.insertCell(10);


																							
																							cel1.appendChild(div);
																							cel2.innerHTML = data2[x];
																							cel3.innerHTML = data3[x];
																							cel4.innerHTML = data4[x];
																							cel5.innerHTML = data5[x];
																							cel6.innerHTML = data6[x];
																							cel7.innerHTML = data7[x];
																							cel8.innerHTML = data8[x];
																							cel9.innerHTML = data9[x];
																							cel10.innerHTML = "<button class='btn btn-primary'>Edit</button>"
																							cel11.innerHTML = "<button class='btn btn-danger'>Delete</button>";

				
																			
																							cel11.onclick = function deleteRecord(){
																									$(successDiv).css("display", "none");
																									$("#showEdit").css("display","none");
																									NewRow.style.display = 'none';
																									$("#course").select2({allowClear: true});
																								}

																							// function to edit a record by clicking edit button

																							cel10.onclick = function editRecord(){
																								
																							
																								updateCourse(chooseCourse);
																								$(errorDiv).css("display", "none");
																								
																								
																								var showText=document.getElementById(rollNo).innerHTML;

																								$("#fn").val(cel2.innerHTML);
																								$("#email").val(cel3.innerHTML);
																								$("#password").val(password);
																								$("#cpassword").val(cpassword);
																								$("#phoneNo").val(cel5.innerHTML);
																								
																								$(course).children("option:selected").val(cel6.innerHTML);
																								$("#BSBA").css("display","block");
																								

																								var all_sub = cel7.innerHTML.split(" ");

																								for(var i=0 ; i<all_sub.length ; i++)
																								{
																									if(all_sub[i] == "MGT211")
																									{
																										$("#MGT211").prop("checked",true)
																									}
																									if(all_sub[i] == "ECO402")
																									{
																										$("#ECO402").prop("checked",true)
																									}
																									if(all_sub[i] == "ACC501")
																									{
																										$("#ACC501").prop("checked",true)
																									}
																									if(all_sub[i] == "ECO403")
																									{
																										$("#ECO403").prop("checked",true)
																									}
																								}

																								setImgText(showText);
																								if(gender_selected == "Female")
																								{
																									$("#female").prop("checked",true);	
																								}
																								else
																								{
																									$("#male").prop("checked",true);	
																								}
																								$("#date").val(dob_temp);
																								$(errorDiv).css("display", "none");
																								$(successDiv).css("display", "none");
																							var Edit = "You're in Editing Mode";
																							$("#nameEdit").html(Edit);
																							$("#showEdit").css("display","block");
																								$(NewRow).css("display", "none");
																								
																							}

																							$(cel1).css("border","1px solid black");
																							$(cel2).css("border","1px solid black");
																							$(cel3).css("border","1px solid black");
																							$(cel4).css("border","1px solid black");
																							$(cel5).css("border","1px solid black");
																							$(cel6).css("border","1px solid black");
																							$(cel7).css("border","1px solid black");
																							$(cel8).css("border","1px solid black");
																							$(cel9).css("border","1px solid black");
																							$(cel10).css("borderBottom","1px solid black");
																							$(cel11).css("borderBottom","1px solid black");
																							

																							var success = "Registered Successfully!";
																							$("#nameSuccess").html(success);
																							$("#showSuccess").css("display","block");
																							

																							$("#fn").val("");
																							$("#email").val("");
																							$("#password").val("");
																							$("#cpassword").val("");
																							$("#phoneNo").val("");

																							if($("#MGT211").prop("checked",true) || $("#ECO402").prop("checked",true) || $("#ACC501").prop("checked",true) || $("#ECO403").prop("checked",true))
																							{
																								$("#MGT211").prop("checked",false);
																								$("#ECO402").prop("checked",false);
																								$("#ACC501").prop("checked",false);
																								$("#ECO403").prop("checked",false);
																							}
																						

																							for(i=0 ; i<gender.length ; i++)
																							{
																								document.getElementsByName("gender")[i].checked = null;
																							}
																							$("#date").val("");
																							
																							$("#BSCS").css("display","none");
																							$("#BSSE").css("display","none");
																							$("#BSIT").css("display","none");
																							$("#BSBA").css("display","none");
																							$("#course").select2({allowClear: true});
																							$("#showEdit").css("display","none");

																							n++;
																							x++;
																					}
																					else
																					{
																						var error = "Year must be less then 2010";
																						showError(error);
																					}		
																				}
																				else
																				{
																					var error = "Please select your Date Of Birth";
																					showError(error);
																				}
																			}
																			else
																			{
																				var error = "Please select the gender";
																				showError(error);
																			}
																		}
																		else
																		{
																			var error = "Minimum 2 subjects required";
																			showError(error);
																		}					
																	}
																	else
																	{
																		var error = "Please select course";
																		showError(error);
																	}	
																}
																else
																{
																	var error = "Invalid Phone Number";
																	showError(error);
																}
															}
															else
															{
																var error = "Please fill out the Phone Number";
																showError(error);
															}
														}
														else
														{
															var error = "Both password are not matching";
															showError(error);
														}
													}
													else
													{
														var error = "Please fill out the confirm password";
														showError(error);
													}
												}
												else
												{
													var error = "Please fill out the password";
													showError(error);
												}
											}
											else
											{
												var error = "Invalid Email";
												showError(error);
											}
										}
										else
										{
											var error = "Email can't empty";
											showError(error);
										}
									}
									else
									{
										var error = "Fullname length must be greater than 5 latters";
										showError(error);
									}
								}
								else
								{
									var error = "Fullname contain letters and spaces only";
									showError(error);
								}
								
							}
							else
							{
								var error = "Fullname can't empty";
								showError(error);
							}
					}	
// function to take error and display on screen
function showError(error)
{
	document.getElementById("nameError").innerHTML = error;
	document.getElementById("showError").style.display = "block";
}



// select subjects
function subjects()
	{
		var course = document.getElementById("course");
		var chooseCourse = course.options[course.selectedIndex].value;

		if(chooseCourse == "BSCS")
		{
			document.getElementById("BSCS").style.display = "block";
			document.getElementById("BSSE").style.display = "none";
			document.getElementById("BSIT").style.display = "none";
			document.getElementById("BSBA").style.display = "none";

			var se = document.getElementsByName("BSSE");
			var it = document.getElementsByName("BSIT");
			var ba = document.getElementsByName("BSBA");

			for(i=0 ; i<se.length ; i++)
			{
				se[i].checked = false;
			}

			for(i=0 ; i<it.length ; i++)
			{
				it[i].checked = false;
			}

			for(i=0 ; i<ba.length ; i++)
			{
				ba[i].checked = false;
			}

		}
		if(chooseCourse == "BSSE")
		{
			document.getElementById("BSCS").style.display = "none";
			document.getElementById("BSSE").style.display = "block";
			document.getElementById("BSIT").style.display = "none";
			document.getElementById("BSBA").style.display = "none";

			var cs = document.getElementsByName("BSCS");
			var it = document.getElementsByName("BSIT");
			var ba = document.getElementsByName("BSBA");

			for(i=0 ; i<cs.length ; i++)
			{
				cs[i].checked = false;
			}

			for(i=0 ; i<it.length ; i++)
			{
				it[i].checked = false;
			}

			for(i=0 ; i<ba.length ; i++)
			{
				ba[i].checked = false;
			}
		}
		if(chooseCourse == "BSIT")
		{
			document.getElementById("BSCS").style.display = "none";
			document.getElementById("BSSE").style.display = "none";
			document.getElementById("BSIT").style.display = "block";
			document.getElementById("BSBA").style.display = "none";


			var cs = document.getElementsByName("BSCS");
			var se = document.getElementsByName("BSSE");
			var ba = document.getElementsByName("BSBA");

			for(i=0 ; i<cs.length ; i++)
			{
				cs[i].checked = false;
			}

			for(i=0 ; i<se.length ; i++)
			{
				se[i].checked = false;
			}

			for(i=0 ; i<ba.length ; i++)
			{
				ba[i].checked = false;
			}
		}
		if(chooseCourse == "BSBA")
		{
			document.getElementById("BSCS").style.display = "none";
			document.getElementById("BSSE").style.display = "none";
			document.getElementById("BSIT").style.display = "none";
			document.getElementById("BSBA").style.display = "block";

			var cs = document.getElementsByName("BSCS");
			var se = document.getElementsByName("BSSE");
			var it = document.getElementsByName("BSIT");

			for(i=0 ; i<cs.length ; i++)
			{
				cs[i].checked = false;
			}

			for(i=0 ; i<se.length ; i++)
			{
				se[i].checked = false;
			}

			for(i=0 ; i<it.length ; i++)
			{
				it[i].checked = false;
			}
		}
		if(chooseCourse == "")
		{
			document.getElementById("BSCS").style.display = "none";
			document.getElementById("BSSE").style.display = "none";
			document.getElementById("BSIT").style.display = "none";
			document.getElementById("BSBA").style.display = "none";
		}
	}


function BSCS()
{
	var temp="" , counter=0;
	var sub1 = document.getElementById("CS201");
	var sub2 = document.getElementById("MTH101");
	var sub3 = document.getElementById("CS404");
	var sub4 = document.getElementById("MTH502");
	
	if(sub1.checked)
	{
		counter++;
		temp += sub1.value+" ";
	}
	if(sub2.checked)
	{
		counter++;
		temp += sub2.value+" ";
	}
	if(sub3.checked)
	{
		counter++;
		temp += sub3.value+" ";
	}
	if(sub4.checked)
	{
		counter++;
		temp += sub4.value+" ";
	}


	if(counter >= 2)
	{
		return temp;
	}
	else
	{
		return false;
	}
}


function BSSE()
{
	var temp="" , counter=0;
	var sub1 = document.getElementById("CS304");
	var sub2 = document.getElementById("MTH202");
	var sub3 = document.getElementById("CS601");
	var sub4 = document.getElementById("MTH501");
	
	if(sub1.checked)
	{
		counter++;
		temp += sub1.value+" ";
	}
	if(sub2.checked)
	{
		counter++;
		temp += sub2.value+" ";
	}
	if(sub3.checked)
	{
		counter++;
		temp += sub3.value+" ";
	}
	if(sub4.checked)
	{
		counter++;
		temp += sub4.value+" ";
	}


	if(counter >= 2)
	{
		return temp;
	}
	else
	{
		return false;
	}
}

function BSIT()
{
	var temp="" , counter=0;
	var sub1 = document.getElementById("CS401");
	var sub2 = document.getElementById("MGT301");
	var sub3 = document.getElementById("CS403");
	var sub4 = document.getElementById("MCM301");
	
	if(sub1.checked)
	{
		counter++;
		temp += sub1.value+" ";
	}
	if(sub2.checked)
	{
		counter++;
		temp += sub2.value+" ";
	}
	if(sub3.checked)
	{
		counter++;
		temp += sub3.value+" ";
	}
	if(sub4.checked)
	{
		counter++;
		temp += sub4.value+" ";
	}


	if(counter >= 2)
	{
		return temp;
	}
	else
	{
		return false;
	}
}



function BSBA()
{
	var temp="" , counter=0;
	var sub1 = document.getElementById("MGT211");
	var sub2 = document.getElementById("ECO402");
	var sub3 = document.getElementById("ACC501");
	var sub4 = document.getElementById("ECO403");
	
	if(sub1.checked)
	{
		counter++;
		temp += sub1.value+" ";
	}
	if(sub2.checked)
	{
		counter++;
		temp += sub2.value+" ";
	}
	if(sub3.checked)
	{
		counter++;
		temp += sub3.value+" ";
	}
	if(sub4.checked)
	{
		counter++;
		temp += sub4.value+" ";
	}


	if(counter >= 2)
	{
		return temp;
	}
	else
	{
		return false;
	}
}



















