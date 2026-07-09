"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./search";
import { UserButton, OrganizationSwitcher, useOrganization } from "@clerk/nextjs";

const Navbar = () => {
    const { organization, isLoaded } = useOrganization();
    const previousOrgId = useRef(undefined);

    useEffect(() => {
        if (!isLoaded) return;

        // Skip the very first run (initial mount) — only reload on actual changes
        if (previousOrgId.current === undefined) {
            previousOrgId.current = organization?.id ?? null;
            return;
        }

        const currentOrgId = organization?.id ?? null;

        if (previousOrgId.current !== currentOrgId) {
            previousOrgId.current = currentOrgId;
            window.location.reload();
        }
    }, [organization?.id, isLoaded]);

    return (
        <nav className="flex items-center justify-between h-full w-full">
            <div className="flex gap-3 items-center shrink-0 pr-6">
                <Link href="/">
                <Image src="/logo.svg" alt="logo" width={36} height={36}/>
                </Link>
                <h3 className="text-xl">Docs</h3>
            </div>
            <SearchInput/>
            <div className="flex gap-3 items-center pl-6">
                <UserButton/>
                <OrganizationSwitcher/>
            </div>
            
        </nav>
    )
}

export default Navbar;
