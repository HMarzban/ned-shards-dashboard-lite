app.component.controller(function(){
    console.log(this)

    $("component-sidebar .nav-wrapper ul li a").on("click",function(event){
        event.preventDefault();
        $("component-sidebar .nav-wrapper ul li a").removeClass('active')
        $(this).addClass("active")
    });


});
