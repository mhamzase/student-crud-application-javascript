var imgText="";
var cp;
var _record;
function saveRecord(record){
    _record=record;
}
function updateRecord()
{
    return _record;
}
$.fn.ratifyUpload = function (options) {

    var self = this;
    var currentParent = $(this).parent();
    cp=currentParent;
    var parentId = `ratify-parent-${getGuid()}`;

    $(currentParent).attr("id", parentId);

    /** Check if jQuery is Loaded **/
    if (!window.jQuery) {
        throw new TypeError('Ratify Upload requires jQuery. jQuery must be included before Ratify Upload.')
    }

    if (typeof $().emulateTransitionEnd !== 'function') {
        throw new TypeError('Ratify Upload requires Bootstrap Js and Css. Bootstrap must be included before Ratify Upload.')
    }

    var labelFile = $(`<label class="lbl-file form-control w-80">Select File</label>`)

    var divChange = $(`
                        <div class="div-change-group">
                            <button type="button" class="btn btn-browse" placeholder="Name">Browse</button> 
                            <button type="button" class="btn btn-remove hidden" placeholder="Name">Remove</button> 
                        </div>
                     `);
   
    $(this).after(labelFile)
    $(labelFile).after(divChange);
    this.addClass("hidden")


    $(this).change(function () {
        $(currentParent).find('.btn-browse').addClass('btn-change');
        $(currentParent).find('.btn-browse').text("Change");
        $(currentParent).find('.btn-browse').removeClass('btn-browse')
        $(currentParent).find('.btn-remove').removeClass('hidden');

        $(currentParent).find('.lbl-file').removeClass('w-80');
        $(currentParent).find('.lbl-file').addClass('w-60');

        var fileName = $(this).get(0).files[0].name;
        $(currentParent).find('.lbl-file').text(fileName)
        //alert(fileName);
        imgText=fileName;
        //alert(imgText);
    });

    $(document).on("click", `#${parentId} .btn-browse`, function () {
        $(self).trigger('click');
    });

    $(document).on("click", `#${parentId} .btn-remove`, function () {
        $(self).val("");
        $(currentParent).find('.btn-remove').addClass('hidden');
        $(currentParent).find('.lbl-file').removeClass('w-60');
        $(currentParent).find('.lbl-file').addClass('w-80');
        $(currentParent).find('.lbl-file').text("Select File");

        $(currentParent).find('.btn-change').text("Browse");
        $(currentParent).find('.btn-change').addClass('btn-browse');
        $(currentParent).find('.btn-change').removeClass('btn-change')
    });


    $(document).on("click", `#${parentId} .btn-change`, function () {
        $(self).trigger('click');
    });

    return this;
}

function getGuid() {
     return Date.now() + ( (Math.random()*100000).toFixed());
}

function removeBtn() {
        $(cp).find('.btn-remove').addClass('hidden');
           $(cp).find('.btn-change').text("Browse");
        $(cp).find('.btn-change').addClass('btn-browse');
        $(cp).find('.btn-change').removeClass('btn-change');
        $(cp).find('.lbl-file').addClass('w-80');
        $(cp).find('.lbl-file').text("Select File");


}
function setImgText(text) {

$(cp).find('.lbl-file').addClass('w-80');
$(cp).find('.lbl-file').text(text);
$(cp).find('.btn-browse').addClass('btn-change');
        $(cp).find('.btn-browse').text("Change");
        $(cp).find('.btn-browse').removeClass('btn-browse')
        $(cp).find('.btn-remove').removeClass('hidden');

        $(cp).find('.lbl-file').removeClass('w-80');
        $(cp).find('.lbl-file').addClass('w-60');

        
}
function generateRollNum(){
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
    return rollNo;
    }

function updateCourse(id) {
    
    if(id=="BSCS")
    {
          $("#select2-course-container").text("BS Computer Science");

    }
 if(id=="BSSE")
    {
          $("#select2-course-container").text("BS Software Engineering");  
    }
    if(id=="BSIT")
    {
          $("#select2-course-container").text("BS Information Technology");  
    }
    if(id=="BSBA")
    {
          $("#select2-course-container").text("BS Business Administration");  
    }
}
function test() {
    alert("hi");
}