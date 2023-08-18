using System;
using System.Collections.Generic;

namespace withReactdotnet.Models;

public partial class Auditlog
{
    public int Id { get; set; }

    public DateTime Date { get; set; }

    public string UserName { get; set; } = null!;

    public string? AccountType { get; set; }

    public string? Group { get; set; }

    public string? SiteMapping { get; set; }

    public string ActionType { get; set; } = null!;

    public string? Description { get; set; }
}
