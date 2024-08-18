cfg.Portriat;

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	var lay = app.CreateLayout( "Linear", "Vertical,FillXY" )
	lay.SetBackColor(tekk.colors.base.a)

var appbar = app.AddLayout(lay, "Linear", "VCenter, FillX")
		var txt = app.AddText(appbar, "Hello", 1,-1,"VCenter,FillX")
		appbar.Batch({
			SetSize_:[1.0, 0.075],
			SetBackColor_:[tekk.colors.window.a],
			//SetMargins_:[0,0.02,0,0]
			SetPadding:[0,0,0,0]
		})
		txt.SetTextSize(80, "ps");
		//appbar.SetScale(1.0, 1.0)
		//lay.AddChild( txt )
		
 setTimeout(()=>{
     var nav = tekk.Navbar(lay,config.pages,1);
             nav.data.lay = lay;
 }, 20)

	//Add layout to app.	
	app.AddLayout( lay )
}
app.Script( "Config.package.js")
app.Script("UITheme.class.js");
app.Script("Theme.obj.package.js");
app.Script("UITheme.BottomNavbar.class.js");