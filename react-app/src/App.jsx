import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout.jsx';
import SiteLayout from './components/SiteLayout.jsx';
import AccountLayout from './components/AccountLayout.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import MarketingLayout from './components/MarketingLayout.jsx';
import Home from './pages/Home.jsx';

import Dashboard from './pages/Dashboard.jsx';
import AddSite from './pages/AddSite.jsx';
import SitePages from './pages/SitePages.jsx';
import SitePagesPage from './pages/SitePagesPage.jsx';
import SiteSettings from './pages/SiteSettings.jsx';
import SiteIntegrations from './pages/SiteIntegrations.jsx';
import SiteIntegrationsIntegration from './pages/SiteIntegrationsIntegration.jsx';
import SiteNotifications from './pages/SiteNotifications.jsx';
import SitePeople from './pages/SitePeople.jsx';

import AccountProfile from './pages/AccountProfile.jsx';
import AccountNotifications from './pages/AccountNotifications.jsx';
import AccountBilling from './pages/AccountBilling.jsx';
import AccountBillingSelect from './pages/AccountBillingSelect.jsx';
import AccountBillingPayment from './pages/AccountBillingPayment.jsx';
import AccountBillingResult from './pages/AccountBillingResult.jsx';

import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      {/* Marketing site */}
      <Route element={<MarketingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* App pages with full chrome */}
      <Route element={<AppLayout headerLogo />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-site" element={<AddSite />} />
      </Route>

      {/* Site pages with chrome + site navigation */}
      <Route element={<SiteLayout />}>
        <Route path="/site-pages" element={<SitePages />} />
        <Route path="/site-pages-page" element={<SitePagesPage />} />
        <Route path="/site-settings" element={<SiteSettings />} />
        <Route path="/site-integrations" element={<SiteIntegrations />} />
        <Route path="/site-integrations-integration" element={<SiteIntegrationsIntegration />} />
        <Route path="/site-notifications" element={<SiteNotifications />} />
        <Route path="/site-people" element={<SitePeople />} />
      </Route>

      {/* Account pages with account nav */}
      <Route element={<AccountLayout />}>
        <Route path="/account-profile" element={<AccountProfile />} />
        <Route path="/account-notifications" element={<AccountNotifications />} />
        <Route path="/account-billing" element={<AccountBilling />} />
      </Route>

      {/* Billing flow (chrome only, no nav) */}
      <Route element={<AppLayout />}>
        <Route path="/account-billing-select" element={<AccountBillingSelect />} />
        <Route path="/account-billing-payment" element={<AccountBillingPayment />} />
        <Route path="/account-billing-result" element={<AccountBillingResult />} />
      </Route>
    </Routes>
  );
}
