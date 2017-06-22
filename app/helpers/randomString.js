export default function generateRandomString(length) {
    const chars = 'abcdefghijklmlnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return Array.apply(null, {length})
    .map(function() {
        return chars.charAt(Math.floor(Math.random() * chars.length))
    })
    .join('');
}