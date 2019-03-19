var object = {
    array : [1, 2, 3, 8, 2, 1, 4, 6, 7, 5, 4, 13, 2, 4, 7, 9, 5, 4, 5, 4, 1, 3, 0, 2],
    filteredArray : [],
    filter : function() {
            // var filteredArray = [];
            this.array.forEach(element => {
                if(this.filteredArray.indexOf(element) == -1) {
                    this.filteredArray.push(element);
                }
        });
    }
}


