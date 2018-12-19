    function search(keyword) {
        var result = $.grep(items, function(val) {
            return (val.firstname).includes(keyword);
        });
        renderTable(result);
    }