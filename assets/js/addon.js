
/* ------------------------------------
	��������Ч�� 
	$ Ahour: aming
	$ mailto: 137992916@qq.com
	$ exaple: searchText(this,'������ؼ���');
------------------------------------------ */
function searchText(obj,textValue){
	if(obj.value == textValue){
		obj.value = '';
	}
	obj.onblur = function(){
		if(obj.value == '')	{
			obj.value = textValue;	
		}
	}
}

/*-------------------------------------------
	 $ ͼƬԤ����
  	 $ comfrom: dreamweaver�༭��
     $example: simplePreload( '01.gif', '02.gif' ); 
---------------------------------*/
function simplePreload()
{ 
  var args = simplePreload.arguments;
  document.imageArray = new Array(args.length);

  for(var i=0; i<args.length; i++)
  {
    document.imageArray[i] = new Image;
    document.imageArray[i].src = args[i];
  }

}

/* ----------------------------------------
	�����ղ�
	$comefrom : ������
	$example : <a href="javascript:void(0);" target="_self" onClick="javascript:AddFavorite('http://www.webjx.com/','��ҳ��ѧ��')">�����ղ�</a>
--------------------------------- */
function AddFavorite(sURL, sTitle)
{
    try { window.external.addFavorite(sURL, sTitle); }
    catch (e)
    {
        try { window.sidebar.addPanel(sTitle, sURL, ""); }
        catch (e) {
            alert("�����ղ�ʧ�ܣ���ʹ��Ctrl+D�������");
        }
    }
}


/* --------------------------------------
	��Ϊ��ҳ
	$example : <a href="javascript:void(0)" onclick="setHomepage()">��Ϊ��ҳ</a>
-------------------------------- */
function SetHome(obj,vrl){
	try{ obj.style.behavior='url(#default#homepage)';obj.setHomePage(vrl); }
	catch(e){
		if(window.netscape) {
			try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  }  
			catch (e) { 
				alert("�˲�����������ܾ���\n�����������ַ�����롰about:config�����س�\nȻ��[signed.applets.codebase_principal_support]����Ϊ'true'");
			}
		var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
		prefs.setCharPref('browser.startup.homepage',vrl);
		}
	}
}

//˫����������Ļ�Ĵ���
var currentpos,timer;
function initialize()
{
timer=setInterval ("scrollwindow ()",30);
}
function clearScroll()
{
clearInterval(timer);
}
function scrollwindow()
{
	currentpos=document.body.scrollTop;
	window.scroll(0,++currentpos);
	if (currentpos !=document.body.scrollTop)
	clearScroll();
}
document.onmousedown=clearScroll;
document.ondblclick=initialize ;




