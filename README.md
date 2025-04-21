
# Micro - Alertify 🚀

A **tiny**, **customizable**, and **dependency-free** JavaScript micro-library for displaying modern, elegant alerts in your web applications. With Alertify, you can create beautiful notifications with minimal code, complete with animations, stacking, custom buttons, and more—all under 2KB (minified)!

<h1><a href="https://micro-alert.vercel.app/" style="text-color: red; text-decoration: none;">Click To See</a></h1>

<img src="https://github.com/user-attachments/assets/ee0e378d-a7f6-43b6-b256-b1c61c990c9b"/>

## Why Alertify?

- **Lightweight**: Less than 2KB minified, perfect for performance-conscious projects.
- **No Dependencies**: Pure JavaScript and CSS, no frameworks required.
- **Modern UI**: Glassmorphism-inspired design with smooth animations.
- **Flexible**: Supports icons, progress bars, custom buttons, and alert stacking.
- **Easy to Use**: Simple API with methods for info, success, warning, and error alerts.

## Features

- Four alert types: `info`, `success`, `warning`, `error`
- Position alerts in any corner (`top-right`, `top-left`, `bottom-right`, `bottom-left`)
- Auto-dismiss with customizable duration
- Animated progress bar for timed alerts
- Stack multiple alerts with a configurable limit
- Custom buttons with styles and click handlers
- Emoji-based icons for visual flair
- Smooth slide-in/out animations
- Clear individual or all alerts programmatically

## Installation

1. **Download** the latest release or clone the repository:

   ```bash
   git clone https://github.com/your-username/alertify.git
   ```

2. **Copy** `alertify.js` and `alertify.css` to your project:

   ```
   your-project/
   ├── css/
   │   └── alertify.css
   ├── js/
   │   └── alertify.js
   ```

3. **Include** the files in your HTML:

   ```html
   <link rel="stylesheet" href="css/alertify.css">
   <script src="js/alertify.js"></script>
   ```

## Usage

Alertify provides a simple API to create alerts with minimal setup. Here’s how to get started:

### Basic Alert

Show a quick info alert:

```javascript
Alertify.info('Welcome to Alertify!');
```

### Customized Alert

Create a success alert with buttons and options:

```javascript
Alertify.success('Task completed!', {
  position: 'top-right',
  duration: 5000,
  icon: true,
  progress: true,
  buttons: [
    { text: 'Undo', style: 'default', onClick: () => console.log('Undo clicked') },
    { text: 'OK', style: 'primary', close: true }
  ]
});
```

### Clear Alerts

Remove all alerts:

```javascript
Alertify.clear();
```

### Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Alertify Example</title>
  <link rel="stylesheet" href="css/alertify.css">
</head>
<body>
  <button onclick="Alertify.info('Info alert!')">Show Info</button>
  <button onclick="Alertify.success('Success!', { position: 'top-right', duration: 3000 })">Show Success</button>
  <script src="js/alertify.js"></script>
</body>
</html>
```

## Demo

Check out the [live demo](https://your-username.github.io/alertify/demo.html) to see Alertify in action! The demo includes buttons to trigger different alert types, custom configurations, and event logging.

## Configuration Options

Customize alerts with these options:

| Option        | Type    | Default      | Description                              |
|---------------|---------|--------------|------------------------------------------|
| `type`        | String  | `'info'`     | Alert type: `info`, `success`, `warning`, `error` |
| `duration`    | Number  | `4000`       | Auto-dismiss time in milliseconds (0 to disable) |
| `position`    | String  | `'top-right'`| Position: `top-right`, `top-left`, `bottom-right`, `bottom-left` |
| `dismissible` | Boolean | `true`       | Show close button                        |
| `icon`        | Boolean | `true`       | Show type-specific icon                  |
| `progress`    | Boolean | `true`       | Show animated progress bar               |
| `buttons`     | Array   | `[]`         | Custom buttons with text, style, and onClick |
| `stack`       | Boolean | `true`       | Enable alert stacking                    |
| `maxStack`    | Number  | `5`          | Maximum stacked alerts                   |

Example button configuration:

```javascript
buttons: [
  { text: 'Retry', style: 'danger', close: true, onClick: () => console.log('Retrying...') },
  { text: 'Cancel', style: 'default' }
]
```

