// script.js — 简单的语言切换与交互
(function(){
  const zhBtn = document.getElementById('zh-btn');
  const enBtn = document.getElementById('en-btn');
  function setLang(lang){
    document.querySelectorAll('[data-zh]').forEach(el=>{
      if(lang==='zh'){ el.hidden = false }
      else el.hidden = true
    })
    document.querySelectorAll('[data-en]').forEach(el=>{
      if(lang==='en') el.hidden = false; else el.hidden = true
    })
    zhBtn.classList.toggle('active', lang==='zh');
    enBtn.classList.toggle('active', lang==='en');
  }
  zhBtn.addEventListener('click', ()=>setLang('zh'))
  enBtn.addEventListener('click', ()=>setLang('en'))
  // 默认中文
  setLang('zh')
})();
