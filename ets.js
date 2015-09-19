(function () {
	var injectedCode = '(' + function() {
        window.inpvisible = false;
        function CheckField ()
        {
            var notefield = $(".inpNoteDesc, #txtAddNote");
            var sidebar = $(".jfdsidebar");
            if (notefield.length > 0 && notefield.is(":visible")) {
                if (window.inpvisible == false) {
                    if (sidebar.length > 0) {
                        sidebar.animate({width:'show'},300);
                    } else {
                        EasyTech_ShowProgressBar();
                        $("<div></div>").load("https://jfdft.com/ets/notes/html", function () {EasyTech_HideProgressBar();}).appendTo("body");
                    }
                    window.inpvisible = true;
                }
            } else {
                if (window.inpvisible == true) {
                    if (sidebar.length > 0) {
                        sidebar.animate({width:'hide'},300);
                    }
                    window.inpvisible = false;
                }
            }
        }
        setInterval(CheckField, 500);
    } + ')();';

    var script = document.createElement('script');
    script.textContent = injectedCode;
    (document.head||document.documentElement).appendChild(script);

	console.log('Enhanced ETS extension loaded.');
})();


