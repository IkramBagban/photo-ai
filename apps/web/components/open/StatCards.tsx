"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart2, DollarSign, Image, Package, Users } from "lucide-react";

const Card = ({ className, children }) => (
  <div className={`rounded-lg border p-4 ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }) => (
  <div className={`pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ className, children }) => (
  <div className={className}>{children}</div>
);

interface StateProps {
  stats: any;
}

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const StatCard: React.FC<StateProps> = ({ stats }) => {
  const statsData = [
    { title: "User Count", value: stats?.userCount, icon: Users },
    {
      title: "Models Trained",
      value: stats.trainedModelCount,
      icon: BarChart2,
    },
    {
      title: "Images Generated ",
      value: stats.imagesCount,
      icon: Image,
    },
    {
      title: "Pack Requests",
      value: stats.packCount,
      icon: Package,
    },
    {
      title: "Total Revenue",
      value: `$${stats.totalRevenue?.toLocaleString() || 0}`,
      icon: DollarSign,
    },
  ];
  return statsData.map((stat, index) => (
    <motion.div
      key={index}
      initial="hidden"
      animate="visible"
      variants={statVariants}
      custom={index}
    >
      <Card className="bg-background/80 border-border/30 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group">
        <CardHeader className="flex items-center space-x-3">
          <stat.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {stat.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-foreground">{stat.value}</p>
        </CardContent>
      </Card>
    </motion.div>
  ));
};

export default StatCard;
