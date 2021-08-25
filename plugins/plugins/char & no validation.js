goods="0123456789."; // onKeypress="goods='abcd'; return limitchar(event)"
function limitchar(e)
{
	var key, keychar;
	if (window.event)
		key=window.event.keyCode;
	else if (e)
		key=e.which;
	else
		return true;
	keychar = String.fromCharCode(key);
	keychar = keychar.toLowerCase();
	goods = goods.toLowerCase();
	if (goods.indexOf(keychar) != -1)
	{
		goods="0123456789.";
		return true;
	}
	if ( key==null || key==0 || key==8 || key==9 || key==13 || key==27 )
	{
		goods="0123456789.";
		return true;
	}
	return false;
}