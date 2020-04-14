import React from 'react';
import { Highlight } from 'react-instantsearch-dom';

const config = {
  appId: '',
  searchApiKey: '',
  indexName: '',
  inputSelector: '',
  querySuggestions: false,
  suggestions: {
    indexName: '',
    maxSuggestions: 10,
  },
  googleAnalytics: false,
  searchParameters: {
    analytics: true,
    clickAnalytics: true,
    hitsPerPage: 20,
  },
  hitComponent: Hit,
  refinements: [
    {
      type: 'basic',
      attribute: 'brand',
      header: 'Marques',
      extra: {
        searchable: true,
      },
    },
    {
      type: 'color',
      attribute: 'color',
      header: 'Couleur',
      extra: {
        limit: 14,
        showMoreLimit: 40,
        showMore: true,
      },
    },
    {
      type: 'size',
      attribute: 'sizes',
      header: 'Tailles',
      extra: {
        patterns: [
          '^([2-5]?X?L|XX?S|S|M)$',
          '^(EU [1-9][0-9]?|100)$',
          '^(UK [1-9][0-9]?)$',
        ],
        showMore: true,
        sortSizesByNbResults: false,
      },
    },
    {
      type: 'price',
      attribute: 'price',
      header: 'Prix',
    },
  ],
  sorts: [{ indexName: '', label: 'Tri: recommandé', default: true }],
  translations: {
    refinementList: {
      brand: 'Marque',
      color: 'Couleur',
      size: 'Taille',
      price: 'Prix',
    },
  },
};

function Hit({ hit, trackClickOnHit }) {
  return (
    <div
      className="ais-InfiniteHits-item"
      onClick={() =>
        trackClickOnHit(
          config.indexName,
          'Click on product',
          hit.__queryID,
          hit.objectID,
          hit.__position
        )
      }
    >
      <picture className="ais-InfiniteHits-image">
        <img src={hit.image} alt={hit.description} />
      </picture>
      <section className="ais-InfiniteHits-content">
        <p className="ais-InfiniteHits-category">{hit.category}</p>
        <p className="ais-InfiniteHits-title">
          <Highlight hit={hit} attribute="description" />
        </p>
        <p className="ais-InfiniteHits-description">{hit.gender}</p>
        <p className="ais-InfiniteHits-price">{`${hit.amount}`}</p>
      </section>
    </div>
  );
}

export default config;
