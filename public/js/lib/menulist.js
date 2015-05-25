var link = window.location.pathname;
var button = null;
var parent = null;
var menuId = $("li.dropdown").attr('id');

function removeClass() {
	$("li.dropdown").removeClass('active');
}

var menulink = [
	{path: "/", button:"home", parent: "home"},
	{path: "/home", button:"home", parent: "home"},
    {path: "/company-profile", button:"company-profile", parent: "CompanyInfo"},
    {path: "/mangementteam", button:"mangementteam",  parent: "CompanyInfo"},
    {path: "/differentiator", button:"differentiator", parent: "CompanyInfo"},
    {path: "/career", button:"career", parent: "CompanyInfo"},
   // {path: "/contactform", button:"contactform", parent: "Contact Us"},
    {path: "/partner", button:"partner", parent: "CompanyInfo"},
    {path: "/softwareproduct", button:"softwareproduct", parent: "offering"},
    {path: "/consultingservice", button:"consultingservice", parent: "offering"},
    {path: "/msp", button:"msp", parent: "offering"},
    {path: "/specializedanalyse", button:"specializedanalyse", parent: "offering"},
    {path: "/technologyresale", button:"technologyresale", parent: "offering"},
    {path: "/contactform", button:"contactlist", parent: "contactlist"},
    {path: "/signin", button:"signin", parent: "signin"},
    {path: "/data-warehouse", button:"data-warehouse", parent: "offering"},
    {path: "/visualbusinessintelligence", button:"visualbusinessintelligence", parent: "offering"},
    {path: "/predictive-modeling ", button:"predictive-modeling ", parent: "offering"},
    {path: "/business-process-strategy", button:"business-process-strategy", parent: "offering"},
    {path: "/comparative-benchmarking", button:"comparative-benchmarking", parent: "offering"},
    {path: "/ecommerce-portal", button:"ecommerce-portal", parent: "offering"},
    {path: "/geo-spatial-analytic", button:"geo-spatial-analytic", parent: "offering"},
    {path: "/information-reporting-strategy ", button:"information-reporting-strategy ", parent: "offering"},
    {path: "/social-media-analysis", button:"social-media-analysis", parent: "offering"},
]
     
     
for(var i = 0; i < menulink.length; i++){
	$('#' + menulink[i].parent).removeClass('active');
    if(link == menulink[i].path)
    {
        button = menulink[i].button;
        parent = menulink[i].parent;
    }
}
$("a[href$='" + link + "']").addClass('active');
$('#' + parent).addClass('active');

// $('li.dropdown').on('mouseover', function(e){
//     $(this).find("ul:first").show();
//     $(this).addClass('active');
// }).on('mouseout', function(e){
// 	$(this).find("ul:first").hide();
// 	if($(this).attr('id') !== $('#' + parent).attr('id')) {
//     	$(this).removeClass('active');
// 	}
// });