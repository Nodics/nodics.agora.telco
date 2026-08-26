import type { ProductCardViewProps } from '../../components/ProductCardView';
import { CommerceProductCardView } from '../../commerce/components/CommerceProductCardView';

export function TelcoProductCardView(props: ProductCardViewProps) {
  const plan = props.product.telco;
  return <CommerceProductCardView {...props} domainDetails={<div data-domain-renderer="telco"><strong>{plan?.planType ?? 'TELCO PLAN'}</strong><p className="muted">{(plan?.allowances ?? []).map(item => `${item.amount ?? ''}${item.unit ?? ''} ${item.type ?? ''}`.trim()).join(' · ')}</p></div>} />;
}
