# [Your Name] — Experience Designer Portfolio

A one-page portfolio site template, built for a LEGO House application.
It's plain HTML/CSS/JS — no build step, no framework — so it's easy to edit
directly on GitHub and host for free with GitHub Pages.

## Files

- `index.html` — all content lives here. Every `[bracketed placeholder]` is
  something to replace with your own text or image.
- `style.css` — the design system (colors, type, layout). Edit the `:root`
  variables at the top to retheme the whole site in one place.
- `script.js` — a tiny scroll effect on the nav bar. No dependencies.
- `assets/` — put your images and CV PDF here.

## How to put your content in

1. **Text:** open `index.html`, search for `[` and replace each bracketed
   placeholder with your real copy (name, project names, captions, etc).
2. **Images:** drop your photos into `assets/`, then replace a
   `<div class="media-frame"><span>[...]</span></div>` block with:
   ```html
   <div class="media-frame">
     <img src="assets/your-photo.jpg" alt="Describe what's shown">
   </div>
   ```
   (The dashed placeholder boxes are just there so you can see the layout
   before you have images — remove the `media-frame` dashed border look
   in `style.css` once every frame has a real photo, or leave it as a
   deliberate "sketch" aesthetic — your call.)
3. **Case studies:** there are 3 case-study blocks (`<article class="case">`)
   pre-built with the same 6-step structure: Spark → Guest journey →
   Prototyping → Testing → Spatial layer → Trade-off. Duplicate the
   `<article class="case">...</article>` block for a 4th project, or delete
   one if 2 is enough. Change `style="--case-color: var(--brick)"` to
   `var(--blue)`, `var(--yellow)`, or `var(--green)` to color-code each one.
4. **CV:** add your CV as `assets/your-cv.pdf` — the "Download CV" button in
   the hero already points there.
5. **Links:** update the email, LinkedIn, and GitHub links in the footer.

## Publishing with GitHub Pages (free)

1. Create a new GitHub repo and push these files to it.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment," set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. Save — your site will be live at
   `https://yourusername.github.io/repo-name/` within a minute or two.

## Design notes

The palette and type are original — not copied from LEGO House's own site
or brand assets — but nod to the material world of bricks and building
instructions: chunky rounded display type, a stud-dot seam between
sections, and a small hero animation of bricks dropping into place.
Feel free to swap the palette in `style.css` if you want to make it more
your own — the six `:root` color variables control everything.
