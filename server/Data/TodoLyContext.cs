using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HackDay.Models;

    public class TodoLyContext : DbContext
    {
        public TodoLyContext (DbContextOptions<TodoLyContext> options)
            : base(options)
        {
        }

        public DbSet<HackDay.Models.TodoLy> TodoLy { get; set; }
    }
