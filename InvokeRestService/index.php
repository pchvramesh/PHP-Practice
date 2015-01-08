<!doctype html>
<?php
	require_once('JQuery.php');
?>
<ul id="CF_Users_List">

</ul>
<?php require_once('ajaxCalls.php')?>
<script type="text/javascript">
    ajaxCalls.loadUsers();
</script>
