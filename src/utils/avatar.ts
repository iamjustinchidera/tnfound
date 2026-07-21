// Generates an inline SVG data-URI "initials" avatar. Used as a graceful
// onError fallback for the small headshot photos (testimonials, story authors)
// so an un-supplied image renders a branded monogram instead of a broken image.
export function initialsAvatar(name: string): string {
  const initials =
    name
      .split(/\s+/)
      .map((w) => w.replace(/[^a-zA-Z]/g, ''))
      // Drop common honorifics so we key off the real name.
      .filter((w) => w && !/^(mrs|mr|ms|dr|prof|principal|chief|sir)$/i.test(w))
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('') || '?';

  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150">` +
    `<rect width="150" height="150" fill="#052e21"/>` +
    `<text x="50%" y="50%" dy=".35em" text-anchor="middle" ` +
    `font-family="Poppins, Arial, sans-serif" font-size="60" font-weight="700" fill="#10b981">${initials}</text>` +
    `</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
