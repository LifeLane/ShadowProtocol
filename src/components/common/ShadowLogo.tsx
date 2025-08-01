
"use client"

import { motion } from "framer-motion";

const ShadowLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-[clamp(2px,2vw,12px)] leading-[0.8] tracking-tighter sm:tracking-normal w-full overflow-x-auto"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
{`
███████╗   ██╗  ██╗    █████╗   ██████╗   ██████╗  ██╗    ██╗
██╔════╝   ██║  ██║   ██╔══██╗  ██╔══██╗ ██╔═══██╗ ██║    ██║
███████╗   ███████║   ███████║  ██║  ██║ ██║   ██║ ██║    ██║
╚════██║   ██╔══██║   ██╔══██║  ██║  ██║ ██║   ██║ ██║ █╗ ██║
███████║   ██║  ██║   ██║  ██║  ██████╔╝ ╚██████╔╝ ███╗█║███║
╚══════╝   ╚═╝  ╚═╝   ╚═╝  ╚═╝  ╚═════╝   ╚═════╝  ╚══╝╚╝╚══╝
`}
    </motion.pre>
);

export default ShadowLogo;
