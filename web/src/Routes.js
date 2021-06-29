// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Route, Router } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/add-notification" page={AddNotificationPage} name="addNotification" />
      <Route path="/admin-notification" page={AdminNotificationPage} name="adminNotification" />
      <Route path="/admin-orderlist-personal" page={AdminOrderlistPersonalPage} name="adminOrderlistPersonal" />
      <Route path="/admin-login" page={AdminLoginPage} name="adminLogin" />
      <Route path="/add-partner" page={AddPartnerPage} name="addPartner" />
      <Route path="/partner-detail" page={PartnerDetailPage} name="partnerDetail" />
      <Route path="/admin-agency-detail" page={AdminAgencyDetailPage} name="adminAgencyDetail" />
      <Route path="/admin-order-list" page={AdminOrderListPage} name="adminOrderList" />
      <Route path="/dashboard-layout" page={DashboardLayoutPage} name="dashboardLayout" />
      <Route path="/admin-agency-list" page={AdminAgencyListPage} name="adminAgencyList" />
      <Route path="/home-user" page={HomeUserPage} name="homeUser" />
      <Route path="/agency-profile" page={AgencyProfilePage} name="agencyProfile" />
      <Route path="/change-password" page={ChangePasswordPage} name="changePassword" />
      <Route path="/notification" page={NotificationPage} name="notification" />
      <Route path="/support" page={SupportPage} name="support" />
      <Route path="/history" page={HistoryPage} name="history" />
      <Route path="/account" page={AccountPage} name="account" />
      <Route path="/qr-code" page={QrCodePage} name="qrCode" />
      <Route path="/partner" page={PartnerPage} name="partner" />
      <Route path="/revenue" page={RevenuePage} name="revenue" />
      <Route path="/insurrancestep2d" page={Insurrancestep2dPage} name="insurrancestep2D" />
      <Route path="/insurrancestep2c" page={Insurrancestep2cPage} name="insurrancestep2C" />
      <Route path="/insurrancestep2b" page={Insurrancestep2bPage} name="insurrancestep2B" />
      <Route path="/insurrancestep2a" page={Insurrancestep2aPage} name="insurrancestep2A" />
      <Route path="/insurrance-step2" page={InsurranceStep2Page} name="insurranceStep2" />
      <Route path="/insurrance-step1" page={InsurranceStep1Page} name="insurranceStep1" />
      <Route path="/agency-register-step2" page={AgencyRegisterStep2Page} name="agencyRegisterStep2" />
      <Route path="/insurrance-info" page={InsurranceInfoPage} name="insurranceInfo" />
      <Route path="/home" page={HomePage} name="home" />
      <Route path="/register-success" page={RegisterSuccessPage} name="registerSuccess" />
      <Route path="/agency-register" page={AgencyRegisterPage} name="agencyRegister" />
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/welcome" page={WelcomePage} name="welcome" />
      <Route notfound page={HomePage} />
    </Router>
  )
}

export default Routes
