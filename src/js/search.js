    function search(keyword) {
        var result = $.grep(items, function(val) {
            return (val.firstname).includes(keyword) || (val.lastname).includes(keyword);
        });
        renderTable(result);
    }