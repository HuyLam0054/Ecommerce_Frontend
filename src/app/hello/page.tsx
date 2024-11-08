import { Sidebar_Admin } from "@/components/layout/sidebar/sidebar_admin";
import * as React from "react";

export interface IHelloPageProps {}

export default function HelloPage(props: IHelloPageProps) {
  return (
    <>
      <Sidebar_Admin />
    </>
  );
}
