// Simple JS for nav toggle and theme cycling (kept minimal for GitHub Pages)
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      if(navList.style.display === 'flex') navList.style.display = 'none';
      else navList.style.display = 'flex';
    });
  }

  // Simple theme switcher (click header to cycle themes) - optional
  const themes = [
    {bg:'#ffffff', text:'#1a1a1a', accent:'#0056b3'},
    {bg:'#f9f9f9', text:'#222', accent:'#e91e63'},
    {bg:'#fffbe6', text:'#333', accent:'#ff9800'}
  ];
  let tIndex = 0;
  const root = document.documentElement;
  document.querySelector('.site-header').addEventListener('click', ()=>{
    tIndex = (tIndex+1) % themes.length;
    root.style.setProperty('--bg', themes[tIndex].bg);
    root.style.setProperty('--text', themes[tIndex].text);
    root.style.setProperty('--accent', themes[tIndex].accent);
  });
});
