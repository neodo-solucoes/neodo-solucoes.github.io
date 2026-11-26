// Interações do site (menu, copiar e-mail, formulário) sem framework
(function(){
  var b=document.querySelector('.topo__menu-btn'),n=document.getElementById('menu');
  if(b&&n){b.addEventListener('click',function(){var o=!n.classList.contains('is-open');n.classList.toggle('is-open',o);b.setAttribute('aria-expanded',o)});
    n.addEventListener('keydown',function(e){if(e.key==='Escape'){n.classList.remove('is-open');b.setAttribute('aria-expanded',false)}})}
  document.querySelectorAll('.email-copia__btn').forEach(function(btn){btn.addEventListener('click',function(){
    var t=btn.parentNode.querySelector('.email-copia__end').textContent,s=btn.querySelector('span');
    (navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){btn.dataset.ok='true';s.textContent='Copiado';setTimeout(function(){btn.dataset.ok='false';s.textContent='Copiar'},2200)}).catch(function(){})})});
  var f=document.querySelector('form.form');
  if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
    var msg='Olá! Vim pelo site da NEODO.\nNome: '+d.get('nome')+(d.get('empresa')?'\nEmpresa: '+d.get('empresa'):'')+'\nWhatsApp: '+d.get('whatsapp')+'\nÁrea: '+d.get('area')+'\nDemanda: '+d.get('demanda');
    window.open('https://wa.me/5585987053309?text='+encodeURIComponent(msg),'_blank','noopener');});
})();
