import { motion } from "framer-motion";
import { StatsCards } from "./StatsCard";
import { ProblemsTable } from "./ProblemTable";

const Dashboard = () => {
  return (
    <motion.div
      className="flex-1 transition-all duration-300"
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="max-w-full mx-auto">
          {/* Header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              DSA Revision Dashboard
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base">
              Track your progress and stay consistent with your coding practice
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <StatsCards />
          </motion.div>

          {/* Problems Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProblemsTable />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
