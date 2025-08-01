
"use client"

import { motion } from "framer-motion";

const ShadowLogo = () => (
    <motion.pre
        className="text-primary glow font-bold text-center text-[clamp(4px,3.5vw,24px)] leading-[0.8] tracking-tighter w-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1, delay: 0.2 }}
    >
{`
███████╗██╗  ██╗ █████╗ ██████╗  ██████╗ ██╗    ██╗
██╔════╝██║  ██║██╔══██╗██╔══██╗██╔═══██╗██║    ██║
███████╗███████║███████║██║  ██║██║   ██║██║    ██║
╚════██║██╔══██║██╔══██║██║  ██║██║   ██║██║ █╗ ██║
███████║██║  ██║██║  ██║██████╔╝╚██████╔╝███╗█║███║
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝ ╚══╝╚╝╚══╝
`}
    </motion.pre>
);

export default ShadowLogo;
