/**
 * Created by Ramesh on 1/7/2015.
 */
var ajaxCalls = {
    loadUsers : function(){
        $('#RM_Users_List').append('<li>Users Loaded</li>');
        var url = "http://www.thomas-bayer.com/sqlrest/CUSTOMER/";
        $.ajax({
            type:"GET",
            datatype:"JSON",
            url:"requestHandler.php?type=usersList&url="+url,
            success:function(data){
                console.log(data);
                //
            },
            complete:function(xhr){
                console.log(xhr);
            }
        });
    }
};