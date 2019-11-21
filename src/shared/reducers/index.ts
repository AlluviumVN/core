import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

// import locale, { LocaleState } from './locale';
import authentication, { AuthenticationState } from './authentication';
// import applicationProfile, { ApplicationProfileState } from './application-profile';

// import administration, { AdministrationState } from 'app/modules/administration/administration.reducer';
// import userManagement, { UserManagementState } from 'app/modules/administration/user-management/user-management.reducer';
// import register, { RegisterState } from 'app/modules/account/register/register.reducer';
// import activate, { ActivateState } from 'app/modules/account/activate/activate.reducer';
// import password, { PasswordState } from 'app/modules/account/password/password.reducer';
// import settings, { SettingsState } from 'app/modules/account/settings/settings.reducer';
// import passwordReset, { PasswordResetState } from 'app/modules/account/password-reset/password-reset.reducer';
// import tiepNhanNgoaiTru, { TiepNhanNgoaiTruState } from 'app/modules/tiep-nhan-ngoai-tru/tiep-nhan-ngoai-tru.reducer';
// import baoHiemXaHoi, { BaoHiemXaHoiState } from 'app/modules/bao-hiem-xa-hoi/mau-bao-hiem/bao-hiem-xa-hoi.reducer';
// import benhAnKhamBenh, { BenhAnKhamBenhState } from 'app/shared/reducers/benh-an-kham-benh.reducer';
// // prettier-ignore
// import menu, {
//   MenuState
// } from 'app/entities/jkcb/menu/menu.reducer';
// import khamBenhNgoaiTru, { KhamBenhNgoaiTruState } from 'app/modules/kham-benh-ngoai-tru/kham-benh-ngoai-tru.reducer';
// // prettier-ignore
// import user, {
//   UserState
// } from 'app/entities/jkcb/user/user.reducer';
// // prettier-ignore
// import donVi, {
//   DonViState
// } from 'app/entities/jkcb/don-vi/don-vi.reducer';
// // prettier-ignore
// import khoa, {
//   KhoaState
// } from 'app/entities/jkcb/khoa/khoa.reducer';
// // prettier-ignore
// import phong, {
//   PhongState
// } from 'app/entities/jkcb/phong/phong.reducer';
// // prettier-ignore
// import chucDanh, {
//   ChucDanhState
// } from 'app/entities/jkcb/chuc-danh/chuc-danh.reducer';
// // prettier-ignore
// import chucVu, {
//   ChucVuState
// } from 'app/entities/jkcb/chuc-vu/chuc-vu.reducer';
// import vienPhiNgoaiTru, { VienPhiNgoaiTruState } from 'app/modules/vien-phi/vien-phi-ngoai-tru/vien-phi-ngoai-tru.reducer';
// // prettier-ignore
// import dotGiaDichVuBhxh, {
//   DotGiaDichVuBhxhState
// } from 'app/entities/jkcb/dot-gia-dich-vu-bhxh/dot-gia-dich-vu-bhxh.reducer';
// // prettier-ignore
// import nhomXetNghiem, {
//   NhomXetNghiemState
// } from 'app/entities/jkcb/nhom-xet-nghiem/nhom-xet-nghiem.reducer';
// // prettier-ignore
// import xetNghiem, {
//   XetNghiemState
// } from 'app/entities/jkcb/xet-nghiem/xet-nghiem.reducer';
// // prettier-ignore
// import xetNghiemApDung, {
//   XetNghiemApDungState
// } from 'app/entities/jkcb/xet-nghiem-ap-dung/xet-nghiem-ap-dung.reducer';
// import tiepNhanNoiTru, { TiepNhanNoiTruState } from 'app/modules/noi-tru/tiep-nhan-noi-tru/tiep-nhan-noi-tru-reducer';
// import toaTongHop, { ToaTongHopState } from 'app/modules/noi-tru/tabs-thong-tin-chinh/toa-dong-hop-reducers';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  readonly authentication: AuthenticationState;
//   readonly locale: LocaleState;
//   readonly applicationProfile: ApplicationProfileState;
//   readonly administration: AdministrationState;
//   readonly userManagement: UserManagementState;
//   readonly register: RegisterState;
//   readonly activate: ActivateState;
//   readonly passwordReset: PasswordResetState;
//   readonly password: PasswordState;
//   readonly settings: SettingsState;
//   readonly menu: MenuState;
//   readonly user: UserState;
//   readonly donVi: DonViState;
//   readonly khoa: KhoaState;
//   readonly phong: PhongState;
//   readonly chucDanh: ChucDanhState;
//   readonly chucVu: ChucVuState;
//   readonly dotGiaDichVuBhxh: DotGiaDichVuBhxhState;
//   readonly nhomXetNghiem: NhomXetNghiemState;
//   readonly xetNghiem: XetNghiemState;
//   readonly xetNghiemApDung: XetNghiemApDungState;
//   /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
//   readonly loadingBar: any;
//   readonly tiepNhanNgoaiTru: TiepNhanNgoaiTruState;
//   readonly baoHiemXaHoi: BaoHiemXaHoiState;
//   readonly tiepNhanNoiTru: TiepNhanNoiTruState;
//   readonly toaTongHop: ToaTongHopState;
//   readonly vienPhiNgoaiTru: VienPhiNgoaiTruState;
//   readonly khamBenhNgoaiTru: KhamBenhNgoaiTruState;
//   readonly benhAnKhamBenh: BenhAnKhamBenhState;
}

const rootReducer = combineReducers<IRootState>({
  authentication
  // locale,
  // applicationProfile,
  // administration,
  // userManagement,
  // register,
  // activate,
  // passwordReset,
  // password,
  // settings,
  // menu,
  // user,
  // donVi,
  // khoa,
  // phong,
  // chucDanh,
  // chucVu,
  // dotGiaDichVuBhxh,
  // nhomXetNghiem,
  // xetNghiem,
  // xetNghiemApDung,
  // /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  // loadingBar,
  // tiepNhanNgoaiTru,
  // baoHiemXaHoi,
  // tiepNhanNoiTru,
  // toaTongHop,
  // vienPhiNgoaiTru,
  // khamBenhNgoaiTru,
  // benhAnKhamBenh
});

export default rootReducer;
