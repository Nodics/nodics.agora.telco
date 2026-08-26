import { TelcoProductCardView } from '../accelerators/telco/TelcoProductCardView';
import { PRODUCT_CARD_RENDERER, storefrontRendererRegistry } from '../rendering/storefrontRendererRegistry';
import { storefrontPageRendererRegistry } from '../rendering/storefrontPageRendererRegistry';
import { StorefrontPage } from '../pages/StorefrontPage';
storefrontRendererRegistry.register({ key: PRODUCT_CARD_RENDERER, layer: 'domain', domain: 'telco', component: TelcoProductCardView });
storefrontRendererRegistry.register({ key: 'agora.telco.product-card', layer: 'domain', domain: 'telco', component: TelcoProductCardView });
storefrontPageRendererRegistry.register({ key: 'agora.telco.page.home', layer: 'domain', domain: 'telco', component: StorefrontPage });
export const activeDomains = ['telco'] as const;
