import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  canonicalUrl,
  ogTitle,
  ogDescription,
  ogUrl,
  breadcrumbs,
  schema
}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper to update or create meta tag
    const updateMeta = (selector, content, property = false) => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
        } else {
          element.setAttribute('name', selector.replace('meta[name="', '').replace('"]', ''));
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Update meta description
    if (description) {
      updateMeta('meta[name="description"]', description);
    }

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', canonicalUrl);
      }
    }

    // Update Open Graph tags
    if (ogTitle) {
      updateMeta('meta[property="og:title"]', ogTitle, true);
    }
    if (ogDescription) {
      updateMeta('meta[property="og:description"]', ogDescription, true);
    }
    if (ogUrl) {
      updateMeta('meta[property="og:url"]', ogUrl, true);
    }

    // Update Twitter tags
    if (ogTitle) {
      updateMeta('meta[name="twitter:title"]', ogTitle);
    }
    if (ogDescription) {
      updateMeta('meta[name="twitter:description"]', ogDescription);
    }

    // Update breadcrumb structured data
    if (breadcrumbs) {
      const breadcrumbId = 'breadcrumb-jsonld';
      let script = document.getElementById(breadcrumbId);
      if (!script) {
        script = document.createElement('script');
        script.id = breadcrumbId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      });
    }

    // Extra page-level structured data (e.g. SoftwareApplication on product
    // pages). `schema` is one object or an array of schema.org objects.
    if (schema) {
      const items = Array.isArray(schema) ? schema : [schema];
      const extraId = 'page-jsonld';
      let script = document.getElementById(extraId);
      if (!script) {
        script = document.createElement('script');
        script.id = extraId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(items.length === 1 ? items[0] : items);
    }

    // Cleanup function
    return () => {
      const breadcrumbScript = document.getElementById('breadcrumb-jsonld');
      if (breadcrumbScript) {
        breadcrumbScript.remove();
      }
      const pageScript = document.getElementById('page-jsonld');
      if (pageScript) {
        pageScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogTitle, ogDescription, ogUrl, breadcrumbs, schema]);

  return null;
};

export default SEO;
