var app = new Ned();

app.config({
    customAttributeNavigate: "ndhref",
    defualtRoot: '/'
});

app.router.add('/',{
    name:  "dashboard Page",
    html:  "./pages/dashboard/dashboard.route.page.html",
    style: "./pages/dashboard/dashboard.route.style.css",
    script:"./pages/dashboard/dashboard.route.script.js",
    controller: function(){ /*console.log("/dashboard router loaded")*/ }
});

app.router.add('/posts',{
    name:  "posts Page",
    html:  "./pages/posts/posts.route.page.html",
    style: "./pages/posts/posts.route.style.css",
    script:"./pages/posts/posts.route.script.js",
    controller: function(){ /*console.log("/posts router loaded")*/ }
});

app.router.add('/addNewPost',{
    name:  "addNewPost Page",
    html:  "./pages/addNewPost/addNewPost.route.page.html",
    style: "./pages/addNewPost/addNewPost.route.style.css",
    script:"./pages/addNewPost/addNewPost.route.script.js",
    controller: function(){ /*console.log("/addNewPost router loaded")*/ }
});

app.router.add('/formComponent',{
    name:  "formComponent Page",
    html:  "./pages/formComponent/formComponent.route.page.html",
    style: "./pages/formComponent/formComponent.route.style.css",
    script:"./pages/formComponent/formComponent.route.script.js",
    controller: function(){ /*console.log("/formComponent router loaded")*/ }
});

app.router.add('/tables',{
    name:  "tables Page",
    html:  "./pages/tables/tables.route.page.html",
    style: "./pages/tables/tables.route.style.css",
    script:"./pages/tables/tables.route.script.js",
    controller: function(){ /*console.log("/tables router loaded")*/ }
});

app.router.add('/userProfile',{
    name:  "userProfile Page",
    html:  "./pages/userProfile/userProfile.route.page.html",
    style: "./pages/userProfile/userProfile.route.style.css",
    script:"./pages/userProfile/userProfile.route.script.js",
    controller: function(){ /*console.log("/userProfile router loaded")*/ }
});

app.router.add('/errors',{
    name:  "errors Page",
    html:  "./pages/errors/errors.route.page.html",
    style: "./pages/errors/errors.route.style.css",
    script:"./pages/errors/errors.route.script.js",
    controller: function(){ /*console.log("/errors router loaded")*/ }
});

app.component.add('component-header',{
    html:  "./components/header/header.component.page.html",
    style: "./components/header/header.component.style.css",
    script:"./components/header/header.component.script.js",
    controller: function(){ /*console.log("<component-header></component-header> component loaded")*/ }
});

app.component.add('component-footer',{
    html:  "./components/footer/footer.component.page.html",
    style: "./components/footer/footer.component.style.css",
    script:"./components/footer/footer.component.script.js",
    controller: function(){ /*console.log("<component-footer></component-footer> component loaded")*/ }
});

app.component.add('component-sidebar', {
    html: "./components/sidebar/sidebar.component.page.html",
    style: "./components/sidebar/sidebar.component.style.css",
    script: "./components/sidebar/sidebar.component.script.js",
    controller: function () { /*console.log("<component-sidebar></component-sidebar> component loaded")*/ }
});



app.init();