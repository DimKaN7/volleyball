export function getImages(context) {
    return context.keys().map(context);
}

export function getIcon(icons, iconName) {
    return icons.find(icon => {
        if (icon.split('/').reverse()[0].split('.')[0] === iconName) return true;
    });
}