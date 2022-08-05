
$( "#adults" ).change(function(){
        var $this = $( this );
        $this.find( "option:first" ).text($this.val() + ' adult(s)').val( $this.val() ).prop('selected',true);
    } )
