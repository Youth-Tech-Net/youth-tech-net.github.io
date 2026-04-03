import Fuse from 'fuse.js';

function escapeHtml(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function escapeRegExp(str) {
    return String(str).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function highlight(text, query) {
    const safeText = escapeHtml(text);

    if (!query) return safeText;

    const regex = new RegExp(`(${escapeRegExp(query)})`, 'gi');
    return safeText.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
}

export function initPublicationSearch(publications = []) {
    const input = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');

    if (!input || !dropdown) return;

    const normalizedPublications = publications.map((pub) => ({
        slug: pub.slug ?? '',
        title: pub.title ?? '',
        tags: Array.isArray(pub.tags) ? pub.tags : [],
        authors: Array.isArray(pub.authors) ? pub.authors : [],
    }));

    const fuse = new Fuse(normalizedPublications, {
        keys: [
            { name: 'title', weight: 0.5 },
            { name: 'tags', weight: 0.25 },
            { name: 'authors', weight: 0.25 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
        minMatchCharLength: 2,
    });

    function hideDropdown() {
        dropdown.classList.add('hidden');
    }

    function showDropdown() {
        dropdown.classList.remove('hidden');
    }

    function renderResults(query) {
        const q = query.trim();

        if (!q) {
            dropdown.innerHTML = '';
            hideDropdown();
            return;
        }

        const results = fuse.search(q, { limit: 7 });

        if (!results.length) {
            dropdown.innerHTML = `
        <li class="px-4 py-2 text-gray-500">
          No results
        </li>
      `;
            showDropdown();
            return;
        }

        dropdown.innerHTML = results
            .map(({ item }) => {
                const title = highlight(item.title, q);
                const meta = [
                    ...(item.authors || []),
                    ...((item.tags || []).length ? [`| ${(item.tags || []).join(', ')}`] : []),
                ].join(', ').replace(', |', ' |');

                return `
          <li
            class="px-4 py-2 hover:bg-royalOrchid hover:text-white cursor-pointer"
            data-slug="${escapeHtml(item.slug)}"
          >
            <div><strong>${title}</strong></div>
            <div class="text-xs text-gray-500">${escapeHtml(meta)}</div>
          </li>
        `;
            })
            .join('');

        showDropdown();
    }

    input.addEventListener('input', () => {
        renderResults(input.value);
    });

    dropdown.addEventListener('mousedown', (event) => {
        const li = event.target.closest('li[data-slug]');
        if (!li) return;

        const slug = li.dataset.slug;
        if (slug) {
            window.open(`/publications/${slug}/`, '_blank');
        }
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target) && event.target !== input) {
            hideDropdown();
        }
    });
}