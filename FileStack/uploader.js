<script type="text/javascript" src="https://static.filestackapi.com/v3/filestack.js"></script>
<script>
    var client = filestack.init('AYvsd76UBRKmkbPWowdfAz');
    function showPicker() {
        client.pick({
        }).then(function(result) {
            console.log(JSON.stringify(result.filesUploaded))
        });
    }
</script>
<input type="button" value="Upload" onclick="showPicker()" />