class display {
    constructor(d, id) {
        d = d;
        this.d = d;
        this.display = document.getElementById(id);
        console.log(d.split(""));
        d.split("").forEach(function (it) {
            this.match(it);
        }.bind(this));
    }

    match(d) {

        let __display__d = [
            {
                d: " ",
                p: []
            },
            {
                d: "-",
                p: [4]
            },
            {
                d: "_",
                p: [7]
            },
            {
                d: "0",
                p: [1, 2, 3, 5, 6, 7]
            },
            {
                d: "1",
                p: [2, 5]
            },
            {
                d: "2",
                p: [1, 3, 4, 5, 7]
            },
            {
                d: "3",
                p: [1, 3, 4, 6, 7]
            },
            {
                d: "4",
                p: [2, 3, 4, 6]
            },
            {
                d: "5",
                p: [1, 2, 4, 6, 7]
            },
            {
                d: "6",
                p: [1, 2, 4, 5, 6, 7]
            },
            {
                d: "7",
                p: [1, 3, 6]
            },
            {
                d: "8",
                p: [1, 2, 3, 4, 5, 6, 7]
            },
            {
                d: "9",
                p: [1, 2, 3, 4, 6]
            },
            {
                d: "a",
                p: [1,2,3,4,5,6]
            },
            {
                d: "b",
                p: [1,2,3,4,5,6,7]
            },
            {
                d: "c",
                p: [1,2,5,7]
            },
            {
                d: "d",
                p: [1,2,3,5,6,7]
            },
            {
                d: "e",
                p: [1,2,4,5,7]
            },
            {
                d: "f",
                p: [1,2,4,5]
            },
            {
                d: "g",
                p: [1,2,5,6,7]
            },
            {
                d: "h",
                p: [2,3,4,5,6]
            },
            {
                d: "i",
                p: [1,7,8]
            },
            {
                d: "j",
                p: [1,3,5,6,7]
            },
            {
                d: "k",
                p: [2]
            },
            {
                d: "l",
                p: [2,5,7]
            },
            {
                d: "m",
                p: [2]
            },
            {
                d: "n",
                p: [2]
            },
            {
                d: "o",
                p: [1,2,3,5,6,7]
            },
            {
                d: "q",
                p: [1,2,3,4,6]
            },
            {
                d: "r",
                p: [1,2,3,4,5]
            },
            {
                d: "s",
                p: [1,2,4,6,7]
            },
            {
                d: "t",
                p: [1,8]
            },
            {
                d: "u",
                p: [2,3,5,6,7]
            },
            {
                d: "v",
                p: [1,2,5]
            },
            {
                d: "w",
                p: [1,2,5]
            },
            {
                d: "x",
                p: [9,10]
            },
            {
                d: "y",
                p: [1,2,5]
            },
            {
                d: "z",
                p: [1,2,7]
            },
            

        ];
        
//        kmnrvwyz

        __display__d.forEach(function (it) {
            if (it.d == d) {
                this.build(it.p);
            }
        }.bind(this))
    }

    build(p) {
        let display = this.getEl("DIV", "display");
        display.innerHTML = "";
        this.append(this.display, display);
        p.forEach(function (it) {
            this.append(display, this.getEl("DIV", `display-pipe display-pipe-${it}`))
        }.bind(this));
    }

    getEl(t, cl) {
        let tmp = document.createElement(t);
        tmp.classList = cl;
        return tmp;
    }

    append(it, el) {
        it.appendChild(el);
    }

}



let dd = new display("1-789", "name")
