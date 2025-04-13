const Alertify = {
    // Default options
    defaults: {
      type: 'info',
      duration: 4000,
      position: 'top-right',
      dismissible: true,
      icon: true,
      progress: true,
      buttons: [],
      stack: true,
      maxStack: 5
    },
  
    // Internal stack counter
    stackCount: {},
  
    // Create alert
    show(message, options = {}) {
      const opts = { ...this.defaults, ...options };
      const position = opts.position || this.defaults.position;
  
      // Initialize stack count for position
      this.stackCount[position] = this.stackCount[position] || 0;
  
      // Check stack limit
      if (opts.stack && this.stackCount[position] >= opts.maxStack) {
        return null;
      }
  
      // Increment stack count
      this.stackCount[position]++;
  
      // Create alert element
      const alert = document.createElement('div');
      alert.className = `alertify alertify-${opts.type} alertify-${position}`;
      alert.style.zIndex = 1000 + this.stackCount[position];
  
      // Calculate stack offset
      if (opts.stack) {
        alert.style.setProperty('--stack-offset', `${this.stackCount[position] * 60}px`);
      }
  
      // Build alert content
      let content = '';
      if (opts.icon) {
        const icons = {
          info: 'ℹ️',
          success: '✅',
          warning: '⚠️',
          error: '❌'
        };
        content += `<span class="alertify-icon">${icons[opts.type]}</span>`;
      }
      content += `<span class="alertify-message">${message}</span>`;
      
      // Add dismiss button
      if (opts.dismissible) {
        content += '<span class="alertify-close">×</span>';
      }
      alert.innerHTML = content;
  
      // Add progress bar
      if (opts.progress && opts.duration > 0) {
        const progress = document.createElement('div');
        progress.className = 'alertify-progress';
        alert.appendChild(progress);
        progress.style.animation = `alertify-progress ${opts.duration}ms linear`;
      }
  
      // Add custom buttons
      if (opts.buttons.length > 0) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'alertify-buttons';
        opts.buttons.forEach(btn => {
          const button = document.createElement('button');
          button.className = `alertify-button alertify-button-${btn.style || 'default'}`;
          button.innerText = btn.text;
          button.onclick = () => {
            btn.onClick?.(alert);
            if (btn.close) alert.remove();
          };
          buttonContainer.appendChild(button);
        });
        alert.appendChild(buttonContainer);
      }
  
      // Append to body
      document.body.appendChild(alert);
  
      // Event listeners
      if (opts.dismissible) {
        alert.querySelector('.alertify-close').onclick = () => this._removeAlert(alert, position);
      }
  
      // Auto-remove after duration
      if (opts.duration > 0) {
        setTimeout(() => this._removeAlert(alert, position), opts.duration);
      }
  
      return alert;
    },
  
    // Remove alert and update stack
    _removeAlert(alert, position) {
      alert.classList.add('alertify-exit');
      alert.addEventListener('animationend', () => {
        alert.remove();
        this.stackCount[position] = Math.max(0, (this.stackCount[position] || 0) - 1);
      });
    },
  
    // Convenience methods
    info(message, options = {}) {
      return this.show(message, { ...options, type: 'info' });
    },
    success(message, options = {}) {
      return this.show(message, { ...options, type: 'success' });
    },
    warning(message, options = {}) {
      return this.show(message, { ...options, type: 'warning' });
    },
    error(message, options = {}) {
      return this.show(message, { ...options, type: 'error' });
    },
  
    // Clear all alerts
    clear(position = null) {
      const alerts = position 
        ? document.querySelectorAll(`.alertify-${position}`)
        : document.querySelectorAll('.alertify');
      alerts.forEach(alert => alert.remove());
      if (position) {
        this.stackCount[position] = 0;
      } else {
        this.stackCount = {};
      }
    }
  };