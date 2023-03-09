import { serverSideTranslations as baseServerSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";

const serverSideTranslations = async (locale: any, domains: string[]) => {
  return await baseServerSideTranslations(
    locale,
    domains,
    nextI18NextConfig as any
  );
};

export default serverSideTranslations;
