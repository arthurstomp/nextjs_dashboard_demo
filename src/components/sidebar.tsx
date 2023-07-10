import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from 'next/link'
import { useRouter } from 'next/router'
 
export default function Sidebar() {
  const router = useRouter()
 
  return (
    <div className="static w-1/5 min-w-[22rem]">
      <Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-[0_0_35px_0_rgba(0,0,0,0.3)] shadow-blue-gray-900/5">
        <div className="mb-2 p-4">
          <Link href="/" className={`${router.pathname === '/' ? "pointer-events-none" : ""}`} data-testid="sidebar__header">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
          </Link>
        </div>
        <List>
          <Link href="/dashboard_demo" className={`${router.pathname === '/dashboard_demo' ? "pointer-events-none" : ""}`} data-testid="sidebar__item--dashboard">
            <ListItem selected={router.pathname === '/dashboard_demo'}>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard Demo
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Settings
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>

    </div>
  );
}
