'use strict';



let obj_3 = {
    num: 5,
    sayNumber: function () {
        let spac = this;
        let say = () =>  {
            console.log(spac.num + 66   );
        };

        say();
    }
};

obj_3.sayNumber();
 