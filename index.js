    var slideIndex = 1;
    showDivs(slideIndex);

    count = 1;
    // console.log(count);

    a = document.getElementById("img1");
    b = document.getElementById("img2");
    c = document.getElementById("img3");

    function plusDivs(n) {
        if (n > 0) {
            if (count == 1) {
                count++;
                a.setAttribute("style", "z-index:1; height: 224px;;top: 30px")
                b.setAttribute("style", "z-index:2; height: 260px;top: 9px");
                c.setAttribute("style", "z-index:1")
            } else if (count == 2) {
                count++;
                a.setAttribute("style", "z-index:2; height: 210px;top: 39px");
                b.setAttribute("style", "z-index:2;height:224px;top:30px");
                c.setAttribute("style", "z-index:3; height: 260px;top: 9px");
                console.log(count);
            } else if (count == 3) {
                count = 1;
                a.setAttribute("style", "z-index:3; height: 260px");
                b.setAttribute("style", "z-index:2;height:224px;top:30px");
                c.setAttribute("style", "z-index:1; height: 205px;top: 39px");
            }
        } else {
            if (count == 1) {
                count = 3;
                a.setAttribute("style", "z-index:1; height: 224px;;top: 30px")
                b.setAttribute("style", "z-index:2; height: 260px;top: 9px");
                c.setAttribute("style", "z-index:1")
            } else if (count == 2) {
                count--;

                a.setAttribute("style", "z-index:2; height: 210px;top: 39px");
                b.setAttribute("style", "z-index:2;height:224px;top:30px");
                c.setAttribute("style", "z-index:3; height: 260px;top: 9px");
                console.log(count);
            } else if (count == 3) {
                count--;

                a.setAttribute("style", "z-index:3; height: 260px");
                b.setAttribute("style", "z-index:2;height:224px;top:30px");
                c.setAttribute("style", "z-index:1; height: 205px;top: 39px");
            }
        }

        showDivs(slideIndex += n);

    }

    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("myslider");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = ""
        // }
        x[slideIndex].style.display = " inline-block";


    }