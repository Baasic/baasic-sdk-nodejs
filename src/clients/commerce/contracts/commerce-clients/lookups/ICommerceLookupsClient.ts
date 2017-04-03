import {
    ICommerceLookupsAddressTypeClient,
    ICommerceLookupsCountryClient,
    ICommerceLookupsCountryStateClient,
    ICommerceLookupsPaymentMethodClient,
    ICommerceLookupsPaymentTransactionStatusClient,
    ICommerceLookupsRecurringCyclePeriodTypeClient,
    ICommerceLookupsSubscriptionStatusClient,
    ICommerceLookupsInvoiceStatusClient
} from '../../';

export interface ICommerceLookups {
    addressTypes: ICommerceLookupsAddressTypeClient;
    countries: ICommerceLookupsCountryClient;
    countryStates: ICommerceLookupsCountryStateClient;
    paymentMethods: ICommerceLookupsPaymentMethodClient;
    paymentTransactionStatuses: ICommerceLookupsPaymentTransactionStatusClient;
    recurringCyclePeriodTypes: ICommerceLookupsRecurringCyclePeriodTypeClient;
    subscriptionStatuses: ICommerceLookupsSubscriptionStatusClient;
    invoiceStatuses: ICommerceLookupsInvoiceStatusClient;
}