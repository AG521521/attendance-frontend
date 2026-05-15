(() => {
  const CONFIG = {
    API_BASE: 'https://api.agai.online/api',
    PLANT_API_BASE: 'https://login.agai.online/api'
  };

  function escapeHTML(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(value) {
    return escapeHTML(value).replace(/`/g, '&#96;');
  }

  function showToast(message, type = 'info') {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'block';
    clearTimeout(toast.hideTimer);
    toast.hideTimer = setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  }

  function getToken() {
    return localStorage.getItem('token');
  }

  function clearSession() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('attendancePassword');
    localStorage.removeItem('pendingInviteCode');
  }

  window.APP_CONFIG = CONFIG;
  window.escapeHTML = escapeHTML;
  window.escapeAttr = escapeAttr;
  window.showToast = showToast;
  window.getToken = getToken;
  window.clearSession = clearSession;
})();
