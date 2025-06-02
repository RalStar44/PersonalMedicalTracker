/**
 * @file config.js
*/

import {appConfig as App} from "./constants/configs/app_config";
import {brandingConfig as Branding} from "./constants/configs/branding_config";
import {companyConfig as Company} from "./constants/configs/company_config";
import {menuConfig as Menu} from "./constants/configs/menu_config";
import {socialMediaConfig as SocialMedia} from "./constants/configs/social_media_config";
import {supportConfig as Support} from "./constants/configs/support_config";
import {codeBase as CodeBase} from './constants/configs/code_base';

//Define or include other environemntal variables here
const codeBaseLevel= CodeBase.Development;
/**
 * Configutations Object 
 * 
 * @type {Object} configs = a collection of all configurations
 * @property {Object} App - Details about the appolication
 * @property {Object} Branding - Information about the company logo
 * @property {Object} Company - Information about the company
 * @property {Object} Menu - Listing of menu items and associated routes.  Also includes context information for swithch views.
 * @property {Object} SocialMedia =  Information about how to contant company on social media 
 * @property {Object} Support - Contact information for support  
 */

const configs = {
    App,
    Branding,
    Company,
    Menu,
    SocialMedia,
    Support,
    codeBaseLevel,
  };
  
  export default configs;
  